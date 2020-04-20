import React, { Component } from 'react';
import UseCasesCard from '../../components/Card';

const ImgProjects1 = "https://firebasestorage.googleapis.com/v0/b/udaplandev.appspot.com/o/Artworks%2FLearn%2FUseCases%2FProject1.webp?alt=media&token=feee11ee-f696-46ae-bfa2-bd5bfc885511"
const ImgProjects2 = "https://firebasestorage.googleapis.com/v0/b/udaplandev.appspot.com/o/Artworks%2FLearn%2FUseCases%2FProject2.webp?alt=media&token=68782d9d-e556-4770-9054-3aac2e81df6f"

class LearnUseCasesProjects extends Component {
    render() {
        return (
            <div>
                <UseCasesCard
                    img={ImgProjects1}
                    title={"Simple project management"}
                    solution={`
                    Use our activity planners to manage your
                    projects, team, or group works simply.
                    We offer simple Kanban-style planner
                    where each task have a To-do, Doing, and
                    Done Status.
                    `}
                />
                <UseCasesCard
                    img={ImgProjects2}
                    title={"Collections"}
                    solution={`
                    Create collections of activity planners to
                    organize your projects or works. You can
                    also see the progress of your activity. No
                    more stress from not knowing what to do.
                    `}
                />
            </div>
        );
    }
}

export default LearnUseCasesProjects;