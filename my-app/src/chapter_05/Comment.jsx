import React from "react";

const styles = {
    wraper: {
        margin:8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imegeContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent : "center",

    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wraper}>
            <div style={styles.imegeContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                alt="프로필 이미지"/>
            </div>        

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;