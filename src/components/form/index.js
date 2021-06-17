import React from 'react';
import { Container, Title, Forget, Lets, Icon, Text, Input, Label,Box} from './styles/form';
export default function Form({children,...restProps}) {
    
    return ( <Container {...restProps}> 
    
        <Title>Welcome <br/>back!</Title>{children}
        
        </Container> )
}
    
Form.Lets = function FormLets({...restProps}) {
    return <Lets {...restProps}/>
    
}

Form.Text = function FormText({children,...restProps}) {
    return <Text {...restProps}> {children} </Text>

}

Form.Icon = function FormIcon({...restProps}) {
    return <Icon {...restProps}/>
}

Form.Forget = function FormForget({...restProps}) {
    return <Forget {...restProps}/>
}

Form.Input = function FormInput({...restProps}) {
    return <Input {...restProps}/>
}

Form.Label = function FormLabel({...restProps}) {
    return <Label {...restProps}/>
}

// Form.Box = function FormBox({...restProps}) {
//     return <Box {...restProps}/>
// }
