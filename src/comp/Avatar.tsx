import C from 'consistencss';
import {Image, Text, View} from 'react-native';
import {UserType} from '../mock/users';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Styles} from 'consistencss/lib/typescript/src/types';
import palette from '../ui/colors';
import {fonts} from '../ui/typography';

export const defaultImg =
  'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg';

export const Avatar = ({
  avatar,
  name,
  hasPay,
  size = imgSize.big,
}: Partial<UserType> & {hasPay?: boolean; size?: Styles[]}) => {
  return (
    <View style={[C.itemsCenter, C.m2]}>
      {avatar && (
        <View>
          <Image
            source={{
              uri: avatar,
            }}
            style={[size, C.bgBlue, C.radius20]}
          />
          {hasPay && (
            <View
              style={[
                C.absolute,
                C.bgRed,
                C.radius4,
                C.borderWidth1,
                C.right0,
                C.borderWhite,
                C.bottom0,
              ]}>
              <Icon color={palette.white} name={'lightning-bolt'} size={16} />
            </View>
          )}
        </View>
      )}
      {<Text style={[fonts.littleText, C.m2]}>{name}</Text>}
    </View>
  );
};

export const imgSize = {
  big: [C.h13, C.w13],
  md: [C.h10, C.w10],
  sm: [C.h8, C.w8],
};
