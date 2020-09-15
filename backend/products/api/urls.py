from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet, BrandViewSet

router = DefaultRouter()
router.register("list", ProductViewSet)
router.register("category", CategoryViewSet)
router.register("brand", BrandViewSet)


urlpatterns = [
    path("", include(router.urls)),
]
