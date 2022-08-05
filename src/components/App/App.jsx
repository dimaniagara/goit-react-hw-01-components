import Profile from '../Profile/Profile';
import user from '../Profile/user.json';
import mainStyle from '../mainStyle.module.css';
import Statistics from '../Statistics/Statistics.jsx';
import statisticsData from '../Statistics/data.json';
import FriendList from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';
import TransactionHistory from '../Transactions/Transactions.jsx';
import transactions from '../Transactions/transactions.json';

export const App = () => {
  return (
    <div className={mainStyle.containerStyle}>
      <Profile
        stats={user.stats}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
