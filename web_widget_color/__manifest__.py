{
    'name': 'Web Widget Color',
    'category': 'web',
    'version': '11.0.0.0.1',
    'author': 'Vauxoo',
    'depends': [
        'base',
        'web',
    ],
    'qweb': [
        'static/src/xml/widget.xml',
    ],
    'data': [
        'views/assets.xml',
    ],
    'auto_install': False,
    'installable': True,
    'web_preload': True,
}
