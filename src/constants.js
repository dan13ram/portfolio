import sixelements from './assets/img/sixelements.webp';
import trance from './assets/img/trance.webp';

// foliage collage project
import wall from './assets/img/foliage/wall.webp';
import relief from './assets/img/foliage/relief.webp';
import pond from './assets/img/foliage/pond.webp';
import stones from './assets/img/foliage/stones.webp';

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
        description: "It is a short video titled \"six elements\".",
        content: [
            { type: "video",
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
            { type: "image",
                url: parenting00
            },
            { type: "image",
                url: parenting01
            },
            { type: "image",
                url: parenting02
            },
            { type: "image",
                url: parenting03
            },
            { type: "image",
                url: parenting04
            },
            { type: "image",
                url: parenting05
            },
            { type: "image",
                url: parenting06
            },
            { type: "image",
                url: parenting07
            },
            { type: "image",
                url: parenting08
            },
            { type: "image",
                url: parenting09
            },
            { type: "image",
                url: parenting10
            },
            { type: "image",
                url: parenting11
            },
            { type: "image",
                url: parenting12
            },
            { type: "image",
                url: parenting13
            },
            { type: "image",
                url: parenting14
            }
        ]
    },
    foliage: {
        cover: wall,
        url: "foliage",
        title: "foliage collage project",
        year: "2019",
        subtitle: "illustration",
        description: "It is a collage of foliage titled \"foliage collage project\".",
        content: [
            { type: "image",
                url: relief
            },
            { type: "image",
                url: wall
            },
            { type: "image",
                url: pond
            },
            { type: "image",
                url: stones
            }
        ]
    },
    trance: {
        cover: trance,
        url: "trance",
        title: "trance",
        year: "2019",
        subtitle: "animated clip",
        description: "It is a short video titled \"trance\".",
        content: [
            { type: "video",
                url: "https://vimeo.com/327432211"
            }
        ]
    }
}
