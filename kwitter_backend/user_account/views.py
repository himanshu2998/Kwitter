from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.serializers import ValidationError
from django.contrib.auth.models import User
import user_account.serializers as user_serializers
import user_account.models as user_models


class UserView(viewsets.ModelViewSet):
    queryset = user_models.Profile.objects.filter(is_active=True)
    http_method_names = ['get', 'patch', 'post']

    def get_serializer_class(self):
        if self.action == 'list':
            return user_serializers.AccountListSerialier
        elif self.action == 'get_profile':
            return user_serializers.AccountSerialier
        elif self.action == 'update_profile':
            return user_serializers.UpdateAccountSerializer
        elif self.action == 'followers':
            return user_serializers.FollowerSerializer
        elif self.action == 'following':
            return user_serializers.FollowingSerializer

    @action(detail=False, methods=["get"])
    def get_profile(self, request, *args, **kwargs):
        obj = request.user.profile
        serializer_class = self.get_serializer_class()
        return Response(serializer_class(instance=obj, context=self.get_serializer_context()).data)

    @action(detail=False, methods=["patch"])
    def update_profile(self, request, *args, **kwargs):
        obj = request.user.profile
        serializer_class = self.get_serializer_class()
        serializer_class = serializer_class(obj, data=request.data, context=self.get_serializer_context(), partial=True)
        if serializer_class.is_valid(raise_exception=True):
            serializer_class.save()
        return Response(serializer_class.data)

    @action(detail=True, methods=["post"])
    def user_status(self, request, *args, **kwargs):
        status = request.query_params.get('status', '').lower()
        if status not in ['follow','unfollow']:
            raise ValidationError('Invalid status')
        obj = self.get_object()
        obj_2 = self.queryset.filter(id=request.query_params.get('profile_id')).exclude(id=obj.id)
        if obj_2.exists():
            obj_2 = obj_2.first()
        else:
            raise ValidationError('Invalid profile')
        user_models.Profile.change_user_status(status=status, user=obj, account=obj_2)
        return Response

    @action(detail=True, methods=["get"])
    def followers(self, request, *args, **kwargs):
        obj = request.user.profile
        #queryset = user_models.Follow.objects.filter(active=True, account=obj)
        serializer_class = self.get_serializer_class()
        serializer_class = serializer_class(obj).data
        return Response(serializer_class)

    @action(detail=True, methods=["get"])
    def following(self, request, *args, **kwargs):
        return self.retrieve(request=request, *args, **kwargs)



class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = user_serializers.RegisterUserSerializer