import RNBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {ReactNode, forwardRef, useCallback} from 'react';
import {StyleSheet} from 'react-native';

type Props = {
  props?: Partial<BottomSheetProps>;
  children?: ReactNode;
};

const BottomSheet = forwardRef<RNBottomSheet, Props>((props, ref) => {
  const {props: sheetProps, children} = props;

  const renderBackdrop = useCallback(
    (bProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...bProps}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.4}
      />
    ),
    [],
  );

  return (
    <RNBottomSheet
      ref={ref}
      backdropComponent={renderBackdrop}
      backgroundStyle={style.background}
      enableDynamicSizing
      enablePanDownToClose
      handleIndicatorStyle={style.handleIndicator}
      index={-1}
      {...sheetProps}>
      <BottomSheetView style={style.sheetView}>{children}</BottomSheetView>
    </RNBottomSheet>
  );
});

const style = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  handleIndicator: {
    backgroundColor: 'gray',
  },
  sheetView: {
    // workaround for this issue: https://github.com/gorhom/react-native-bottom-sheet/issues/1573#issue-1936697973
    minHeight: 31,
  },
});

export {BottomSheet};
