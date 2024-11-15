import RoomCard from '@/components/RoomCard';
import rooms from '@/data/rooms.json'

export default function Home() {
  return (
    <>
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard toom={room}/>)
      ) : (
        <p>No rooms available at the moment</p>
      )}
    </>
  );
}
