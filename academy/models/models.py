from odoo import api, models, fields

class Teachers(models.Model):
    _name = 'academy.teachers'

    name = fields.Char()
    biography = fields.Html()
    color = fields.Char()
    birth_date = fields.Date()
