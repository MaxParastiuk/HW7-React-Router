export default function AlbumsItem({ album }) {
	return (
		<div className='albums-img'>
			<p className='albums-name'>{album.title}</p>
		</div>
	);
}
