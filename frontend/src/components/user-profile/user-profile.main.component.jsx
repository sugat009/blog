import React, {useState} from 'react';
import {
    GalleryContainer, GalleryImageContainer,
    GalleryItemContainer,
    GalleryItemInfoContainer,
    GalleryItemLikesContainer, GalleryItemTypeContainer, Loader, VisuallyHiddenContainer
} from "./user-profile.main.styles";
import {UserProfileData} from "./user-profile.data";

const UserProfileMainComponent = () => {
    const [userPosts, setUserPosts] = useState(UserProfileData);

    return (
        <main>
            <div className="container">
                <GalleryContainer>
                    {
                        userPosts.map(post => <GalleryItemContainer
                            tabIndex="0"
                            key={post.id}
                        >
                            <GalleryImageContainer
                                src={post.imageUrl}
                                alt=""
                            />
                            {
                                ((userPosts.indexOf(post) + 1) % 3 === 0) ? (
                                <GalleryItemTypeContainer>
                                    <VisuallyHiddenContainer>Gallery</VisuallyHiddenContainer>
                                    <i className="fas fa-clone" aria-hidden="true"/>
                                </GalleryItemTypeContainer>
                                ) : null
                            }
                            <GalleryItemInfoContainer>
                                <ul>
                                    <GalleryItemLikesContainer>
                                        <VisuallyHiddenContainer>Likes:</VisuallyHiddenContainer><i
                                        className="fas fa-heart"
                                        aria-hidden="true"
                                    /> {post.likes}
                                    </GalleryItemLikesContainer>
                                    <li className="gallery-item-comments">
                                        <VisuallyHiddenContainer>Comments:</VisuallyHiddenContainer><i
                                        className="fas fa-comment"
                                        aria-hidden="true"
                                    /> {post.comments}
                                    </ li>
                                </ul>
                            </GalleryItemInfoContainer>
                        </GalleryItemContainer>)
                    }
                </GalleryContainer>
                {/* End of gallery*/}
                <Loader />
            </div>
        </main>
    );
};

export default UserProfileMainComponent;
