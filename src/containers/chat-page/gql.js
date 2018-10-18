import gql from 'graphql-tag';

export const ChatMessagesQuery = gql`
  query messages {
    messages {
      message
      userName
    }
  }
`;

export const CreateMessage = gql`
  mutation CreateMessage($userId: String!, $message: String!, $userName: String!, $timestamp: String!, ) {
  createMessage(userId: $userId, userName: $userName, message: $message, timestamp: $timestamp) {
    _id
  }
}
` 