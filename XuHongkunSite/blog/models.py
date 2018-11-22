from django.db import models
# 这个.py文件与数据库的数据表具有对应关系。
# Create your models here.

# 以下部分是我自己编的
from django.utils import timezone
from django.contrib.auth.models import User


# 定义数据格式
class BlogArticles(models.Model):
    title = models.CharField(max_length=300)    #① 规定字段title的属性是CharField(max_length=300)类型。
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="blog_posts")    #② FK:一个用户对应多篇文章, 类User就是BlogArticles的对应对象。
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)

    class Meta:    #③
        ordering = ("-publish",)    # 按照publish字段值的倒序显示

    def __str__(self):
        return self.title


