import React from 'react';
import { Container, Icon, Text, Icons, Link, Google} from './styles/social';
export default function Social({children,...restProps}) {
    
    return ( <Container {...restProps}> 
        {children}
        </Container> )
 
}

Social.Text = function SocialText({children,...restProps}) {
    return <Text {...restProps}> {children} </Text>

}

Social.Icon = function SocialIcon({...restProps}) {
    return <Icon {...restProps}/>
}

Social.Icons = function SocialIcons({children,...restProps}) {
    return <Icons {...restProps}> {children} </Icons>

}

Social.Link = function SocialLink({children,...restProps}) {
    return <Link {...restProps}> {children} </Link>

}

Social.Google = function SocialGoogle({...restProps}) {
    return <Google {...restProps}/>
}