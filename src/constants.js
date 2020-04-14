import sixelements from './assets/img/sixelements.webp';
import trance from './assets/img/trance.webp';

// foliage collage project
import foliage00 from './assets/img/foliage/floral_relief.webp'
import foliage01 from './assets/img/foliage/green_wall_detail.webp'
import foliage02 from './assets/img/foliage/landscape_cover.webp'
import foliage03 from './assets/img/foliage/stones.webp'
import foliage04 from './assets/img/foliage/turmeric_1.webp'
import foliage05 from './assets/img/foliage/taj_mahal_pond.webp'
import foliage06 from './assets/img/foliage/wall_detail_2.webp'
import foliage07 from './assets/img/foliage/wall_detail_4.webp'
import foliage08 from './assets/img/foliage/wall_detail_5.webp'
import foliage09 from './assets/img/foliage/wall_detail_6.webp'

// parenting absolute
import parenting00 from './assets/img/parenting/building the right connect.webp';
import parenting01 from './assets/img/parenting/carrot.webp';
import parenting02 from './assets/img/parenting/catch the right act.webp';
import parenting03 from './assets/img/parenting/directions.webp';
import parenting04 from './assets/img/parenting/finding middle ground.webp';
import parenting05 from './assets/img/parenting/gadget time.webp';
import parenting06 from './assets/img/parenting/hold your horses.webp';
import parenting07 from './assets/img/parenting/language.webp';
import parenting08 from './assets/img/parenting/lead by example.webp';
import parenting09 from './assets/img/parenting/le comportement.webp';
import parenting10 from './assets/img/parenting/model the parents.webp';
import parenting11 from './assets/img/parenting/parenting styles 1.webp';
import parenting12 from './assets/img/parenting/parenting styles 2.webp';
import parenting13 from './assets/img/parenting/stereotypes.webp';
import parenting14 from './assets/img/parenting/teach and learn.webp';

export const data = {
    sixelements: {
        cover: sixelements,
        url: "sixelements",
        title: "six elements",
        year: "2019",
        subtitle: "animated clip",
        content: [
            { 
                type: "video",
                url: "https://vimeo.com/327434482"
            }
        ]
    },
    parenting: {
        cover: parenting14,
        url: "parenting",
        title: "parenting absolute",
        year: "2020",
        subtitle: "book illustration",
        description: "Digital Illustrations for an informative book on parenthood and its many challenges.\nThese illustrations attempt to explain the theme of each chapter subtly using body language, form, text and symbolism and are void of facial expressions.",
        content: [
            { 
                type: "image",
                url: parenting00
            },
            { 
                type: "image",
                url: parenting01
            },
            { 
                type: "image",
                url: parenting02
            },
            { 
                type: "image",
                url: parenting03
            },
            { 
                type: "image",
                url: parenting04
            },
            { 
                type: "image",
                url: parenting05
            },
            { 
                type: "image",
                url: parenting06
            },
            { 
                type: "image",
                url: parenting07
            },
            { 
                type: "image",
                url: parenting08
            },
            { 
                type: "image",
                url: parenting09
            },
            { 
                type: "image",
                url: parenting10
            },
            { 
                type: "image",
                url: parenting11
            },
            { 
                type: "image",
                url: parenting12
            },
            { 
                type: "image",
                url: parenting13
            },
            { 
                type: "image",
                url: parenting14
            }
        ]
    },
    foliage: {
        cover: foliage02,
        url: "foliage",
        title: "foliage collage project",
        year: "2019-20",
        subtitle: "mixed media illustration",
        description: "A mixed media series that indulges in the phenomenon of Ruinenlust. Illustrations and images of foliage overlaid on to photographic images of barren and broken structures/textures.\nI am attempting to convey the absence of human intervention in spaces as a type of aesthetic language in itself.",
        content: [
            { 
                type: "foliage",
                landscape: [
                    foliage02,
                    foliage06,
                    foliage07
                ],
                portrait: [
                    foliage09,
                    foliage08,
                    foliage00,
                    foliage04
                ],
                square: [
                    foliage05,
                    foliage03,
                    foliage01
                ]
            }
        ]
    },
    trance: {
        cover: trance,
        url: "trance",
        title: "trance",
        year: "2019",
        subtitle: "animated clip",
        content: [
            { 
                type: "video",
                url: "https://vimeo.com/327432211"
            }
        ]
    }
}
