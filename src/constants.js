import sixelements from './assets/img/sixelements.webp';
import trance from './assets/img/trance.webp';
import wall from './assets/img/foliage/wall.webp';
import relief from './assets/img/foliage/relief.webp';
import pond from './assets/img/foliage/pond.webp';
import stones from './assets/img/foliage/stones.webp';

export const data = {
    sixelements: {
        cover: sixelements,
        url: "sixelements",
        title: "six elements",
        subtitle: "animated clip",
        description: "It is a short video titled \"six elements\".",
        content: [
            { type: "video",
                url: "https://vimeo.com/327434482"
            }
        ]
    },
    foliage: {
        cover: wall,
        url: "foliage",
        title: "foliage collage project",
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
        subtitle: "animated clip",
        description: "It is a short video titled \"trance\".",
        content: [
            { type: "video",
                url: "https://vimeo.com/327432211"
            }
        ]
    }
}
