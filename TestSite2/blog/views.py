from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .form import AddForm


def index(request):
    # return HttpResponse(u"Welcome to Django!")
    # return render(request, 'home.html')

    string = u"必ずDjangoをマスターします！"
    TutorialList = ["HTML ", "CSS ", "Javascript ", "JQuery ", "D3 ", "Python ", "Django "]
    info_dict = {'site': u'社員番号', 'content': u'お名前'}

    if request.method == 'POST':  # 当提交表格时
        my_form = AddForm(request.POST)  # my_form包含提交的数据

        if my_form.is_valid():  # 如果提交数据合法
            true_name = my_form.cleaned_data['Name']
            true_email = my_form.cleaned_data['Email']
            true_birth = my_form.cleaned_data['BirthDay']
            res = my_form.cleaned_data
            return HttpResponse('<h1 align="center">Welcome to Django!<h1>')

        else:
            new_form = AddForm()

    if request.method == 'GET':
        my_form = AddForm()
        return render(request, 'home.html', {
            'string': string,
            'TutorialList': TutorialList,
            'info_dict': info_dict,
            'form': my_form,
        })




