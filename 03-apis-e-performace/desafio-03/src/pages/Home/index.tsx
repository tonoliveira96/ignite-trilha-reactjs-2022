import { useEffect, useState } from 'react';
import api from '../../api/services';
import { CardPost, CardPostProps } from '../../components/CardPost';
import { Header } from '../../components/Header';
import { Profile, ProfileProps } from '../../components/Profile';
import { ContainerHome, ContainerPosts } from './styles';

export function Home() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
  const [cardPosts, setCardPosts] = useState<CardPostProps[]>([]);

  const getProfile = async () => {
    const { data } = await api.get('/users/tonoliveira96');
    setProfile({
      avatr_url: data.avatar_url,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      login: data.login
    });
  };

  const getPostsData = async () => {
    const { data } = await api.get('/repos/tonoliveira96/ignite-trilha-reactjs-2022/issues');

    const mappedPosts = data.map((post: any) => ({
      id: post.number,
      title: post.title,
      created_at: post.created_at,
      body: post.body
    }));
    console.log(mappedPosts);
    setCardPosts(mappedPosts);
  };

  useEffect(() => {
    getProfile();
    getPostsData();
  }, []);

  return (
    <>
      <Header />
      <Profile data={profile} />
      <ContainerHome>
        <h1>Home</h1>
        <ContainerPosts>
          {cardPosts.map(cards => (
            <CardPost
              id={cards.id}
              body={cards.body}
              created_at={cards.created_at}
              title={cards.title} />
          ))}
        </ContainerPosts>
      </ContainerHome>
    </>

  );
}