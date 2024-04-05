import styled from 'styled-components';

export const ProfileIcon = styled.div`
    width: ${({ size }) => size || '100px'};
    height: ${({ size }) => size || '100px'};
    border-radius: 50%;
    margin-bottom: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    background: ${({ color }) => (color ? color : 'none')};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
`