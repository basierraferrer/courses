import { SidebarItems } from './SidebarItems';
import { auth } from '@/auth.config';


export const Sidebar = async () => {
  const session = await auth();
  const isAuthenticated = Boolean(session?.user);
  const isAdminUser = session?.user?.role === 'admin';
  return <SidebarItems isAdminUser={isAdminUser} isAuthenticated={isAuthenticated} />
}