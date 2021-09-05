from django.db import models
from django.contrib.auth.models import User
from common.models import createUpdateSoftModel


class Profile(createUpdateSoftModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=255, blank=True, null=True)

    def get_following_count(self):
        # return self.follow_set.filter(is_active=True).distinct('id').count()
        return self.follow_set.filter(is_active=True).count()

    def get_follower_count(self):
        # return self.follow_account.filter(is_active=True).distinct('id').count()
        return self.follow_set.filter(is_active=True).count()

    def get_user_name(self):
        return " ".join([item for item in [self.user.first_name ,self.user.last_name] if item])


class StatusClass:

    def __init__(self, user, account, class_to_use):
        self.user = user
        self.account = account
        self.class_to_use = class_to_use

    def execute(self):
        raise NotImplementedError('Execute not implemented')


class FollowUser(StatusClass):

    def execute(self):
        self.class_to_use.objects.create(account=self.account, follower=self.user)


class UnFollowUser(StatusClass):

    def execute(self):
        self.class_to_use.objects.filter(account=self.account, follower=self.user).update(is_active=False)


class Remove(StatusClass):

    def execute(self):
        self.class_to_use.objects.filter(account=self.user, follower=self.account).update(is_active=False)


status_map = {
    'follow': FollowUser,
    'unfollow': UnFollowUser,
    'remove': Remove
}


class Follow(createUpdateSoftModel):

    account = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="follow_account")
    follower = models.ForeignKey(Profile, on_delete=models.CASCADE)

    @classmethod
    def change_user_status(cls, status, user, account):
        helper_class = status_map.get(status)
        if helper_class:
            helper_class(user=user, account=account, class_to_use=cls)
            helper_class.execute()