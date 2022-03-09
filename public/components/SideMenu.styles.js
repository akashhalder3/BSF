import styled from '@emotion/styled';

export const SideMenuContainer = styled.div`
    display: flex;
    flexDirection: column;
    position: absolute;
    width: 248px;
    maxWidth: 100px;
    height: 100%;
    background-image: linear-gradient(
        315deg,
        rgba(30,18,230,1) 0%,
        rgba(246, 112, 98, 0.8) 74%),
        url(${p => p.SideMenuLogo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
`;

export const SideMenuHeader = styled.h3`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;
`;
export const MenuItemContainer = styled.div`
    
`;

export const MenuItem = styled.div`
    text-align: center;
    padding: 24px 80px;
    font-weight: 600;
    color: ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(19, 15, 64)'};
    &:hover{
        color: rgba(255, 255, 255);
        transition: .1s ease-in
    },
    &:after{
        content: '';
        border: 1px solid ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(255, 112, 25)'};
        display: block;
        margin: 8px 0 4px;
    }
`;

export const Text = styled.p`
    display: inline,
`;

export const Icon = styled.img`
    height: 16px;
    width: 16px;
    padding-right: 20px;
`;