// creates global object for country map data

var country = {
  /////////////////////////////////////////////////////////// restaurant markers
  restaurants: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: "the-dining-room-whatley-manor"
        },
        geometry: {
          type: "Point",
          coordinates: [-2.149361, 51.583705]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "the-bybrook"
        },
        geometry: {
          type: "Point",
          coordinates: [-2.231996, 51.493577]
        }
      },
      {
        type: "Feature",
        properties: {
          id: "le-champignon-sauvage"
        },
        geometry: {
          type: "Point",
          coordinates: [-2.078979, 51.89148]
        }
      }
    ]
  },
  //////////////////////////////////////////////////////////////// route markers
  route: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-2.228845, 51.493466]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-2.3431563377380367, 51.52973859618809]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-2.218261957168579, 51.74554214787037]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-2.210633754730224, 51.74067602528639]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.968977451324463, 51.71684605088367]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.9415545463562012, 51.725752196313]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.834048926830292, 51.75856682612113]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.8310099840164185, 51.75860667148936]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.7531508207321167, 51.881074226955505]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.7570400238037107, 51.9010675209675]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.775389015674591, 51.90700023197973]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.7977184057235716, 51.911641597567886]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.9634574651718137, 51.952603792902266]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.8560189008712766, 52.036354823752525]
        }
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [-1.7831164598464966, 52.04950332049848]
        }
      }
    ]
  }
};