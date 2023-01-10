import Link from "next/link";

function AdminList({ title, href }) {
	return (
		<div className="w-full bg-white p-2 border-b">
			<Link href={href}>{title}</Link>
		</div>
	);
}

export default AdminList;
