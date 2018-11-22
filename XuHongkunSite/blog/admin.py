from django.contrib import admin

# Register your models here.
# 以下是我的代码
from .models import BlogArticles

class BlogArticlesAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "publish")
    list_filter = ("publish", "author")
    search_fields = ('title', "body")
    raw_id_fields = ("author",)
    date_hierarchy = "publish"
    ordering = ['-publish', 'author']

# 将BlogArticles, BlogArticlesAdmin类注册到admin中
admin.site.register(BlogArticles, BlogArticlesAdmin)  # 在admin界面显示Blog articles
