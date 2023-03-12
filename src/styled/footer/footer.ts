import styled from '@emotion/styled'

interface FooterStyledProps {
    backgroundColor?: string;
}

export const FooterStyled = styled.footer<FooterStyledProps>`
    position: fixed;
    display: none;
    margin: 10px;
    background-color: ${props => props.backgroundColor || 'initial'};
`

// export const NewFooterStyled = styled(FooterStyled)`
//     border: 2px solid green;
// `