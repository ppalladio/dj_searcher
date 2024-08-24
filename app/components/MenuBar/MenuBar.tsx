'use client';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { useRouter } from 'next/navigation';

interface Props {}
const MenuBar = (props: Props) => {
    const { push } = useRouter();
    return (
        <div className="mx-4">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>DJ Sets</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => push('/dj')}>Convert DJ Set</MenubarItem>
                        <MenubarItem onClick={() => push('/djSets?isConverted=True&userSortField=converted_date')}>My Converted Sets</MenubarItem>
                        <MenubarItem onClick={() => push('/djSets?sortField=top')}>Top Sets</MenubarItem>
                        <MenubarItem onClick={() => push('/djSets?sortField=last')}>Last Sets</MenubarItem>
                        <MenubarItem onClick={() => push('')}>Random Set</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Playlists</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Analyze Playlist </MenubarItem>
                        <MenubarItem onClick={() => push('/playlistsSets?type=recommended')}>Recommended</MenubarItem>
                        <MenubarItem>Random Playlist</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Likes</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => push('/djSets?isLiked=True&userSortField=liked_date')}>Liked Sets</MenubarItem>
                        <MenubarItem onClick={() => push('/playlistsSets?type=liked')}>Liked Playlists</MenubarItem>
                        <MenubarItem>Liked Tracks</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => push('/pricing')}>Plans & Pricing</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    );
};
export default MenuBar;
