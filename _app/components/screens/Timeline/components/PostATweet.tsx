/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import TInput from '../../../common/form/TInput';
import * as Yup from 'yup';
import {useFormHandler} from '../../../../@lib/Hooks/useHookForm';
import Colors from '../../../../@lib/constants/theme/Colors';
import {margins} from '../../../../@lib/constants';
import HeaderText from '../../../common/text/HeaderText';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
import Loader from '../../../common/loader/Loader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
interface Props {
  onClose: () => void;
  onSubmit: (arg: any) => void;
  tweetLoading: boolean;
}
const PostATweet = ({onClose, onSubmit, tweetLoading}: Props) => {
  const {
    control,
    onSubmitHandler,
    errors,
    isSubmitSuccessful,

    reset,
  } = useFormHandler(
    {tweet: ''},
    Yup.object().shape({
      tweet: Yup.string().required(),
    }),
    onSubmit,
  );
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      onClose();
    }
  }, [isSubmitSuccessful]);

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAwareScrollView enableAutomaticScroll enableOnAndroid>
        <HeaderText text="What's on your mind?" textStyle={styles.headerText} />
        <TInput
          style={[
            styles.singleField,
            {
              borderColor: errors['tweet'] ? Colors.alert : Colors.primary,
            },
          ]}
          control={control}
          name={'tweet'}
          placeholder={'Write your tweet...'}
          multiline={true}
          numberOfLines={40}
        />
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={[styles.iconWrapper, {backgroundColor: Colors.secondary}]}
            onPress={onClose}>
            <FIcon name="close" size={40} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={tweetLoading}
            style={styles.iconWrapper}
            onPress={onSubmitHandler}>
            {tweetLoading ? (
              <Loader />
            ) : (
              <IIcon name="send" size={30} color={Colors.secondary} />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default PostATweet;

const styles = StyleSheet.create({
  scrollView: {flexGrow: 1},
  headerText: {
    marginBottom: margins.md,
    fontSize: Text_Size.Text_4,
    color: Colors.subText,
  },
  singleField: {
    backgroundColor: Colors.secondary,
    padding: margins.md,
    borderRadius: margins.sm,
    borderWidth: 2,

    // flexGrow: 0.5,
  },
  btnWrapper: {
    marginTop: margins.xl,
    flexDirection: 'row',
    marginHorizontal: margins.xl,
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: 70,
    height: 70,
    backgroundColor: Colors.primary,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
