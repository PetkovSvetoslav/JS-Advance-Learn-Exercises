class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }

    get likes() {
        let _likesNumber = this._likes.length;
        if (_likesNumber == 0) {
            return `${this.title} has 0 likes`
        }
        if (_likesNumber == 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${_likesNumber - 1} others like this story!`
    }


    like(username) {
        if (this._likes.find(u => u == username)){
            throw new Error("You can't like the same story twice!")
        }
        if (username == this.creator) {
            throw new Error(`You can't like your own story!`);
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        let index = this._likes.findIndex(u => u == username);
        if (index == -1) {
            throw new Error(`You can't dislike this story!`)
        }
        this._likes.splice(index, 1)
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        let foundId = this.comments.find(c => c.id == id);
        if (id == undefined || !foundId){
            let lastCommentId = this.comments.map(c => c.id).max;
            let comment = {};
            comment.Id = lastCommentId + 1;
            comment.Username = username;
            comment.Content = content;
            comment.Replies = [];
            this.comments.push(lastCommentId+1, username, content);
            return `${username} commented on ${this.title}`;
        }
        
        let comment = this.comments.find(c => c.id == id)
        let reply = {};
        reply.Id = commentId;
        reply.Username = username;
        reply.Content = content;
        comment.Replies.push(reply);
        return `You replied successfully`;
    }

    toString(sortingType) {
        if (sortingType == 'desc'){
            this.comments.reverse();
            for (let comment of this.comments) {
                comment.Replies.reverse();
            }
        }
        if (sortingType == 'username') {
            this.comments.sort((c1, c2) => c1.username.localeCompare(c2.username));
            for (let comment of this.comments) {
                comment.Replies.sort((c1, c2) => c1.localeCompare(c2));
            }
        }
        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(this._likes());
        result.push(`Comments`);
        for (let c of this.comments) {
            result.push(`${c.id}. ${c.username}: ${c.content} `);
            for (let r of c.Replies) {
                result.push(`${r.id}. ${r.username}: ${r.content} `);
            }
        }
        return result.join('\n');

    }

}
