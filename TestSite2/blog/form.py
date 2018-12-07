from django import forms

class AddForm(forms.Form):
    Name = forms.CharField(max_length=30)
    Email = forms.EmailField()
    BirthDay = forms.CharField(max_length=30)