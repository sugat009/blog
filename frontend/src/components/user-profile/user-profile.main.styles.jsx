import styled, {css} from "styled-components";

export const VisuallyHiddenContainer = styled.span`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
`;

export const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -1rem -1rem;
    padding-bottom: 3rem;
`;

export const GalleryItemHoverStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const GalleryItemInfoContainer = styled.div`
  display: none;
  
  li {
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 600;
  }
  
  .fa-comment {
    transform: rotateY(180deg);
`;

export const GalleryItemContainer = styled.div`
    position: relative;
    flex: 1 0 16rem;
    margin: 1rem;
    color: #fff;
    cursor: pointer;
    
    &:hover ${GalleryItemInfoContainer},
    &:focus ${GalleryItemInfoContainer} {
        ${GalleryItemHoverStyle};
      }
    }
`;

export const GalleryItemLikesContainer = styled.li`
  margin-right: 2.2rem;
`;

export const GalleryItemTypeContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
    
    .fa-clone {
      transform: rotateY(180deg);
    }
`;

export const GalleryImageContainer = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Loader = styled.div`
    width: 5rem;
    height: 5rem;
    border: 0.6rem solid #999;
    border-bottom-color: transparent;
    border-radius: 50%;
    margin: 0 auto;
    animation: loader 500ms linear infinite;
    
    @keyframes loader {
      to {
        transform: rotate(360deg);
      }
    }
`;

