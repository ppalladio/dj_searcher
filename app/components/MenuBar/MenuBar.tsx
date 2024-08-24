'use client';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { useRouter } from 'next/navigation';

interface Props {}
const MenuBar = (props: Props) => {
    const router = useRouter();
    return (
        <div className="mx-4">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>DJ Sets</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => router.push('/y2s')}>Convert DJ Set</MenubarItem>
                        <MenubarItem>My Converted Sets</MenubarItem>
                        <MenubarItem>Top Sets</MenubarItem>
                        <MenubarItem>Last Sets</MenubarItem>
                        <MenubarItem>Random Set</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Playlists</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Analyze Playlist </MenubarItem>
                        <MenubarItem>Recommended</MenubarItem>
                        <MenubarItem>Random Playlist</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Likes</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Liked Sets</MenubarItem>
                        <MenubarItem>Liked Playlists</MenubarItem>
                        <MenubarItem>Liked Tracks</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => {}}>Plans & Pricing</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    );
};
export default MenuBar;
