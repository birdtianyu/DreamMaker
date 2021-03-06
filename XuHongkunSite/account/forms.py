# 自己创建
from django import forms
from django.contrib.auth.models import User    #①
# from .models import UserProfile, UserInfo

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)  # 密码输入框格式(html5 widget)

# class RegistrationForm(forms.ModelForm):    #②
#     password = forms.CharField(label="Password", widget=forms.PasswordInput)
#     password2 = forms.CharField(label="Confirm Pssword", widget=forms.PasswordInput)
#
#     class Meta:    #③
#         model = User    #④
#         fields = ("username", "email")
#
#     def clean_password2(self):    #⑤
#         cd = self.cleaned_data
#         if cd['password'] != cd['password2']:
#             raise forms.ValidationError("passwords do not match.")
#         return cd['password2']
#
# class UserProfileForm(forms.ModelForm):
#     class Meta:
#         model = UserProfile
#         fields = ("phone", "birth")
#
# class UserInfoForm(forms.ModelForm):
#     class Meta:
#         model = UserInfo
#         fields = ("school", "company", "profession", "address", "aboutme", "photo")
#
# class UserForm(forms.ModelForm):
#     class Meta:
#         model = User
#         fields = ("email",)