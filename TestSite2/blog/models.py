from django.db import models

# Create your models here.
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Person(models.Model):
    name = models.CharField(max_length=30)
    # age = models.IntegerField()
    age = models.PositiveIntegerField()
    email = models.EmailField()
    data = models.DateTimeField(auto_now=True)
    introduction = models.TextField()

    def __str__(self):
        return self.name

@python_2_unicode_compatible
class Book(models.Model):
    name = models.CharField(max_length=30)
    auther = models.ForeignKey(Person, on_delete=models.CASCADE)
    data = models.DateField()
    introduction = models.TextField()

    def __str__(self):
        return self.name
    