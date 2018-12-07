from django.contrib import admin

# Register your models here.
from .models import Person, Book

class PersonAdmin(admin.ModelAdmin):
    # listdisplay设置要显示在列表中的字段（id字段是Django模型的默认主键）
    list_display = ('id', 'name', 'age', 'email', 'data',)
    # list_per_page设置每页显示多少条记录，默认是100条
    list_per_page = 50
    # ordering设置默认排序字段，负号表示降序排序
    ordering = ('-id',)
    # 筛选器
    list_filter = ('age', 'email',)  # 过滤器
    search_fields = ('id', 'name', 'email')  # 搜索字段
    date_hierarchy = 'data'    # 详细时间分层筛选　

admin.site.register(Person, PersonAdmin)
admin.site.register(Book)