import {sort as sortVariable} from '../utils';

export const  sortBy = (arrayToSort,initialPosts, sortBy) => {
    switch (sortBy) {
        case sortVariable.byDate:
            console.log(arrayToSort);
            return arrayToSort.slice().sort((a,b) => {
                const bDate = new Date(b.timestamp);
                const aDate = new Date(a.timestamp);
                console.log(bDate, aDate);
                return (bDate - aDate);
            });
            case sortVariable.byVote:
               return arrayToSort.slice().sort((a,b) => (b.voteScore - a.voteScore));
        default:
            return (initialPosts);
    }
}