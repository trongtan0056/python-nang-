# Generated by Django 5.1.3 on 2024-11-12 04:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_product_image'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Oder',
            new_name='Order',
        ),
        migrations.RenameModel(
            old_name='OderItem',
            new_name='OrderItem',
        ),
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='oder',
            new_name='order',
        ),
    ]
