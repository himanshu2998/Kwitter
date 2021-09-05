from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
import user_account.models as user_models 


class AccountSerialier(serializers.ModelSerializer):

    follower_count = serializers.IntegerField(source='get_follower_count')
    following_count = serializers.IntegerField(source='get_following_count')
    full_name = serializers.CharField(source='get_user_name')
    email = serializers.CharField(source='user.email')
    username = serializers.CharField(source='user.username')

    class Meta:
        model = user_models.Profile
        fields = (
            'id',
            'username',
            'email',
            'full_name',
            'follower_count',
            'following_count',
            'description',
        )


class AccountListSerialier(serializers.ModelSerializer):

    email = serializers.CharField(source='user.email')
    username = serializers.CharField(source='user.username')

    class Meta:
        model = user_models.Profile
        fields = (
            'id',
            'username',
            'email',
        )


class RegisterUserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, allow_null=False, allow_blank=False)
    password2 = serializers.CharField(write_only=True, required=True, allow_null=False, allow_blank=False)

    class Meta:
        model = User
        fields = (
            'username',
            'password',
            'password2',
            'email',
            'first_name',
            'last_name',
        )
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.VaidationError({"passowrd": "Password fields did not match."})
        return data

    def to_representation(self, obj):
        return AccountSerialier(instance=obj.profile, context=self.context).data

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        user_models.Profile.objects.create(user=user)
        return user


class UpdateAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.Profile
        fields = (
            'description',
        )

    def to_representation(self, obj):
        return AccountSerialier(instance=obj, context=self.context).data


class UserShortSerializer(serializers.ModelSerializer):

    username = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()

    class Meta:
        model = user_models.Profile
        fields = (
            'id',
            'username',
            'status',
        )

    def get_status(self, obj):
        'follow, unfollow, remove'


    def get_username(self, obj):
        return obj.user.username


class FollowerSerializer(serializers.ModelSerializer):

    followers = serializers.SerializerMethodField()

    class Meta:
        model = user_models.Profile
        fields = (
            'id',
            'followers',
        )

    def get_followers(self, obj):
        queryset = user_models.Profile.objects.filter(id__in=list(obj.follow_set.filter(is_active=True).values_list('follower_id', flat=True)))
        return UserShortSerializer(queryset, many=True, context=self.context).data




class FollowingSerializer(serializers.ModelSerializer):
    pass