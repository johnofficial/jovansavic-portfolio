from base.application.components import Base
from base.application.components import api
from base.application.components import params
from base.application.components import authenticated
import base.common.orm
from base.common.sequencer import sequencer
import datetime
import decimal
import json


# @authenticated()  # if every http method has to be authenticated
@api(
    URI='/testimonials'
)
class Testimonial(Base):

    def get(self):

        Testimonial, _session = base.common.orm.get_orm_model('testimonials')

        _all = _session.query(Testimonial).all()

        res = []

        for test in _all:

            res.append({
                "name": test.name,
                "image": test.image,
                "description": test.description
            })

        return self.ok({'testimonials': res})


    @params(
        {'name': 'testimonial_data', 'type': json, 'doc': 'data of testimonial to add'}
    )
    def post(self, testimonial_data):
        Testimonial, _session = base.common.orm.get_orm_model('testimonials')

        print('data ', testimonial_data)

        sid = sequencer().new('t')

        testimonial = Testimonial(sid,
                                  testimonial_data['name'],
                                  testimonial_data['image'],
                                  testimonial_data['description'])

        try:
            _session.add(testimonial)
            _session.commit()
            return self.ok({'added': sid})

        except Exception as e:
            return self.error('{}'.format(e))

