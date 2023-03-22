# 🪙Baxe Test

### By: [Guillermo Sierra](https://www.guillesierra.com/)

<p align="left">
  <img src="https://www.guillesierra.com/img/about/sierra.JPG" alt="logo" width="20%"/>
</p>

## React Native project with Typescript

### Libraries & Frameworks

- ⛓ Routing: [React Navigation](https://reactnavigation.org/)
  For simplicity a map of objects to iterate within `createBottomTabNavigation` :

``` typescript
export type Route = {
  name: string;
  component: React.ComponentType<any>;
  iconName: {
    focused: string;
    unfocused: string;
  };
};
```

- ⚙ ️State management: [React-query](https://react-query-v3.tanstack.com/overview) would be the chosen tool but due to
  limited time, only mock data
  generated with [FakerJS](https://github.com/DiUS/java-faker) ,
  🚨however [faker.avatar() was not properly working](https://github.com/DiUS/java-faker/issues/590)
- 🖌 Styling: [Consistencss](https://consistencss.now.sh/) Based in Tailwind for web, this library helps to ensure
  consistent UI Guidelines such as ``BASE_PIXEL=4`` to perform all the spacings and sizes in the app. Also I've created
  some helper functions such as `eColor()` and sizes such as:

``` typescript
export const imgSize = {
  card: [C.h50, C.w46],
  big: [C.h13, C.w13],
  md: [C.h10, C.w10],
  sm: [C.h8, C.w8],
};
```

Time constrains made me skip the part of applying properly a gradient mask to text, however this could be thanks to a SVG Mask as follows:
````typescript
//Absolute Container 
<Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id="Gradient" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={gradient[0]} />
            <Stop offset="1" stopColor={gradient[1]} />
          </LinearGradient>
        </Defs>
        <Text
          id="Text"
          x="50%"
          fill="url(#Gradient)"
          fillRule="evenodd"
          y={`${0.75 * lineHeight}`}
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          fontSize={fontSize}
          textAnchor={textAnchor[alignment]}>
          {text}
        </Text>
      </Svg>
````
In order to achieve the following gradient
![img_5.png](img_5.png)

- 🧪 Unit tests: user creation
- 🎨 Figma Inspiration: [Zeplin](https://www.figma.com/file/EhDxvOBVUlFWEbhS3lwx8l) See comparison below:
![img_4.png](img_4.png)
![img_3.png](img_3.png)

## Install

### ios:

```
cd ios && pod install
yarn start
yarn pods-m1
react-native run-ios
```
