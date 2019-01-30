import * as React from 'react';
import PopupDialog, { ScaleAnimation, DialogButton, DialogTitle } from 'react-native-popup-dialog';
import { View, Text } from 'react-native';
import { popupDialogStyles } from './styles';

const { dialogStyle, titleStyle, buttonStyle,
    descriptionContainerStyle, textStyle, titleTextStyle,
    buttonTextContainer, buttonTextStyle } = popupDialogStyles


interface PopupDialogProps {
    onPress: () => void | null,
    description: string,
    title: string,
    show: boolean,
    buttonText: string
}

let popupDialog: PopupDialog | null = null;

const PopupDialogComponent = (props: PopupDialogProps) => {
    const { title, buttonText, show, description } = props;

    const scaleAnimation = new ScaleAnimation(0);

    const dialogTitle = (<DialogTitle
        title={title}
        titleStyle={titleStyle}
        titleTextStyle={titleTextStyle}
    />)

    const dialogButton = (<DialogButton
        onPress={() => popupDialog ? popupDialog.dismiss() : null}
        text={buttonText}
        buttonStyle={buttonStyle}
        textContainerStyle={buttonTextContainer}
        textStyle={buttonTextStyle}
        key={buttonText}
    />);
    return (
        <PopupDialog
            show={show}
            dialogAnimation={scaleAnimation}
            width={0.8}
            height={0.4}
            ref={(popup) => { popupDialog = popup; }}
            dialogTitle={dialogTitle}
            dialogStyle={dialogStyle}
            actions={[dialogButton]}
        >
            <View style={descriptionContainerStyle}>
                <Text style={textStyle}>{description}</Text>
            </View>
        </PopupDialog >
    );
}

export default PopupDialogComponent;