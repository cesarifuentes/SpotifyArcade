export default function displayPlaylists(playlists) {
  return playlists.map((data, key) => {
    return (
      <li className="flex-item-profile" key={key}>
        {/* {data.name} */}
        <img
          className="playlist-img small immovable"
          src={data ? data.images.at(0).url : "/assets/images/error.png"}
          alt={data.name}
        />
      </li>
    );
  });
}
