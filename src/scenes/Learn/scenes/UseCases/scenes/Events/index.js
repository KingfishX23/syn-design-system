import React, { Component } from 'react';
import UseCasesCard from '../../components/Card';

const ImgEvents1 = "https://firebasestorage.googleapis.com/v0/b/udaplandev.appspot.com/o/Artworks%2FLearn%2FUseCases%2FEvent1.webp?alt=media&token=708b946c-f74a-4dd4-bf38-bfbb6e5dab51"
const ImgEvents2 = "https://firebasestorage.googleapis.com/v0/b/udaplandev.appspot.com/o/Artworks%2FLearn%2FUseCases%2FEvent2.webp?alt=media&token=00c9613e-b441-49f2-b094-277db8a7ed3c"
const ImgEvents3 = "https://firebasestorage.googleapis.com/v0/b/udaplandev.appspot.com/o/Artworks%2FLearn%2FUseCases%2FEvent3.webp?alt=media&token=1922188a-4def-4b1e-b53d-881feda07214"

class LearnUseCasesEvents extends Component {
    render() {
        return (
            <div>
                <UseCasesCard
                    img={ImgEvents1}
                    title={"Events Promotions"}
                    solution={`
                    Promote your events to a specific category
                    without being intrusive. Users that search our
                    pages have a high chance of intent to discover
                    things to participate in.
                    `}
                />
                <UseCasesCard
                    img={ImgEvents2}
                    title={"Events Rundowns & Controlling"}
                    solution={`
                    Use our activity planner to list all the things
                    happening in your event. This way everyone
                    can easily access what is happening in your
                    event. People interested can also access this
                    on the event detail page
                    `}
                />
                <UseCasesCard
                    img={ImgEvents3}
                    title={"Events Landing Page"}
                    solution={`
                    When you post an event in our pages, you 
                    are creating landing pages for your events
                    that you can also share with a link. This gives
                    general and specific info that your event have,
                    and also time availability if accessed by our user.
                    `}
                />
            </div>
        );
    }
}

export default LearnUseCasesEvents;