from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.urls import path
import user_account.views as user_views

ROUTES = DefaultRouter()
ROUTES.register('user_account', user_views.UserView, basename='user_account')
urlpatterns = ROUTES.urls
urlpatterns += [
    path('token/', TokenObtainPairView.as_view(), name='get_token'),
    #path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token'), limiting refresh token for assignment
    path('register/', user_views.RegisterView.as_view(), name='user_register')
]