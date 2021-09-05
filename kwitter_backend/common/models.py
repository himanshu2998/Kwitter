from django.db import models


class createUpdateSoftModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, editable=True)
    modified_at = models.DateTimeField(auto_now_add=True, editable=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True
