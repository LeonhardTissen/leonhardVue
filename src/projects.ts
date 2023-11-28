interface Project {
    name: string,
    link: string,
    image: string,
    color: string,
    tags: Array<string>,
    description: string,
    content: string,
    readmore?: string,
}

export const projectDatabase: Array<Project> = [
    {
        name: 'JollyWorld',
        link: 'https://poki.com/en/g/jollyworld',
        image: 'jollyworld.jpg',
        color: '#A1EFF1',
        tags: ['Featured', 'Web Design', 'Game Design', 'Level Design', 'Backend Development', 'Server Management', 'Python', 'SQL', 'HTML5', 'SASS', 'PixiJS'],
        description: 'The sandbox ragdoll game with extensive customization and level editor.',
        content: `
            <h3>Playable Characters</h3>
            I created the <a href="https://jollyworld.app/mod">character selection page</a> along with the character customization built on the modding system.
            Not only are players able to pick a wide variety of high quality community created characters, but they
            could create one themselves in seconds using a very performant in-browser image editor. Players that
            don't want to hand draw their characters could also pick from a wardrobe and have a fully personalized character
            in seconds that is ready to play right away.

            <h3>Level Editor Blueprints</h3>
            The Level Editor for JollyWorld can do pretty much anything, but this vast toolset can lead to an overwhelming
            feeling for a new level builder. This is why I extended the blueprint system, which allows for level builders
            to upload their creations in a beautiful, snappy layout. Building a level is a plug & play experience that is
            like no other.

            <h3>Level Design</h3>
            <a href="https://jollyworld.app/?user=Warze">I've also created my fair share of games</a> on the JollyWorld platform. They range from traditional stages to
            recreations of popular game titles such as Cat Mario and Bad Piggies. Many of my levels have more than 100,000 plays
            and one even stands at over 500,000 plays, which is the third most played level in the game.
        `
    },
    {
        name: 'Jelly\'s Venture',
        link: 'https://poki.com/en/g/jelly-venture',
        image: 'jellyventure.jpg',
        color: '#33FF00',
        tags: ['Featured', 'Game Design', 'Level Design', 'Graphic Design', 'JavaScript', 'PixiJS', 'Game Development', 'Netlify'],
        description: 'The fun platforming game in collaboration with the YouTuber Jelly.',
        content: `
            <h3>Level Design</h3>
            I built all 25 levels in the game. Jump from a friendly outdoor environment into a mighty lava-filled city or a
            dangerous factory. All the game elements are introduced in fair ways and used in all sorts of challenges.
            Designed with replayability in mind, players are challenged to get all 3 stars in the game that requires
            unveiling secrets and quick movement.

            <h3>Level Art</h3>
            I designed all of the tilesets in the game along with all of the game elements. Due to the fast paced gameplay,
            these needed to be cohesive and not throw you off. I also created some of the backgrounds.
        `
    },
    {
        name: 'Doomed.io',
        link: 'https://doomed.io',
        image: 'doomed.jpg',
        color: '#DC7030',
        tags: ['Featured', 'Graphic Design', 'Game Design', 'Web Design', 'Backend Development', 'Java', 'TypeScript', 'PostCSS', 'HTML5', 'WebSocket'],
        description: 'The online multiplayer game about gathering resources and building bases.',
        content: `
            The game was left without updates for many years, and with an established community that has brought some
            challenges. My goal was to improve the playing experience overall.

            <h3>Reimagined UI</h3>
            Nearly all of the UI elements have been redesigned to be more performant, adapting to different screen sizes
            and overall being more cohesive and understandable.

            <h3>Anti-Cheat</h3>
            Over time, more and more players have used cheats to break the game in various ways and one of my main goals
            was to prevent this. Nearly all cheats have been patched to allow for a fair playing field and a great experience
            for new players that are still learned the environment.

            <h3>Mobile Support</h3>
            I made the game playable on mobile devices and tablets by making all actions compatible with touch controls.
            This came with a lot of challenges but I managed to pull it off without adding any more UI clutter.

            <h3>Game Content</h3>
            A large portion of my contributions was ironing out existing world elements, but I even added my own resources
            and items, like the cactus and grappling hook.
        `
    },
    {
        name: 'Kubi Pets',
        link: 'https://kubipets.netlify.app',
        image: 'kubipets.jpg',
        color: '#4D88FC',
        tags: ['Featured', 'Graphic Design', 'Game Design', 'ThreeJS', 'CSS', 'JavaScript', 'HowlerJS', 'Python', 'Webpack', 'Netlify'],
        description: 'The addicting game about unboxing pets and merging them.',
        readmore: 'Features',
        content: `
            <h3>Unlimited Gameplay</h3>
            The game is designed to be endless but remain rewarding. There is always a new pet to discover.
            Prestiging allows for replayability without the game becoming mundane.

            <h3>Upgrade Islands</h3>
            Instead of getting your upgrades in a GUI, you have to walk to different islands.

            <h3>Mobile Support</h3>
            Unbox pets on the go with joystick controls.

            <h3>Performance</h3>
            The game was designed to handle hundreds of simultaneous pets with thousands of coins coming out of them.
        `
    },
    {
        name: 'Serpentario Educativo',
        link: 'https://serpentarioeducativo.netlify.app/',
        image: 'serpentarioeducativo.jpg',
        color: '#74B040',
        tags: ['Graphic Design', 'Web Design', 'CSS3', 'JavaScript', 'Python', 'Web Design', 'HTML5', 'Netlify'],
        description: 'The argentinian wildlife rescue center dedicated to conservation and environmental education.',
        content: `
        <h3>Website</h3>
        I was contacted to build a website for the rescue center who previously only had an online presence of social media
        accounts. The site compiles all the useful information about them in a pretty color scheme. I even made custom
        icons for their homepage.
        `
    },
    {
        name: 'WartOS',
        link: 'https://wartos.warze.org/',
        image: 'warzeorg.jpg',
        color: '#FF2323',
        readmore: 'Features',
        tags: ['Featured', 'Graphic Design', 'Web Design', 'Backend Development', 'Server Management', 'Flask', 'Python', 'Jinja', 'OAuth', 'JavaScript', 'VueJS', 'Webpack', 'Netlify', 'TypeScript', 'CSS3'],
        description: 'The web-based operating system.',
        content: `
        <h3>Desktop Experience</h3>
        The place that simply lists out all my projects would be too boring. Instead I built my own operating system-like
        website where you can open my projects as programs. Customize your wallpaper or upload your own!
        `
    },
    {
        name: 'Permaplace',
        link: 'https://warze.org/permaplace',
        image: 'permaplace.jpg',
        color: '#B4B7A9',
        readmore: 'Features',
        tags: ['Backend Development', 'Server Management', 'SQL', 'Python', 'Jinja', 'HTML5', 'JavaScript', 'CSS', 'Databases', 'r/place'],
        description: 'A place where every pixel lasts a lifetime.',
        content: `
        <h3>Social Experiment</h3>
        An ongoing social experiment inspired by r/place. Placing a pixel is completely anonymous and can be done every 5 seconds.

        <h3>Giant Canvas</h3>
        A 10000x10000 canvas brought a plethera of challenges. Pixels are stored in a custom format that loads incredibly quickly
        on any device to allow instantaneous placing of pixels. Due to the immense size, permaplace will never be fully filled,
        but that means there is always space for you.

        <h3>Collaboration</h3>
        Due to the time cooldown, you are incentivised to work together with friends. And that's exactly what people did.
        Giant creations were formed only made possible through teamwork and coordination, because remember:
        Any previously placed pixel can never be removed.

        <h3>Custom Rooms</h3>
        Users are able to create their own rooms with smaller canvas sizes and less restrictions.
        `
    },
    {
        name: 'Casino Bot',
        link: 'https://github.com/LeonhardTissen/warzeCasinoBot',
        image: 'casinobot.png',
        color: '#4C41CB',
        readmore: 'Features',
        tags: ['Graphic Design', 'Game Design', 'Backend Development', 'Server Management', 'JavaScript', 'NodeJS', 'SQLite'],
        description: 'The open source Discord bot with various games and economy aspects.',
        content: `
        <h3>Text-based Games</h3>
        All games can be played within a Discord server. The bot has both singleplayer and multiplayer games with various rewards.

        <h3>Economy</h3>
        Collect diamonds and chests which can be used for trading with other users. Become the richest in the server!

        <h3>Customization</h3>
        Users can customize various aspects of games such as cards, colors and chips.
        `
    },
    {
        name: 'Lights on!',
        link: 'https://lightson.warze.org',
        image: 'lightson.jpg',
        color: '#111111',
        readmore: 'About',
        tags: ['Graphic Design', 'Game Design', 'TypeScript', 'PixiJS', 'Netlify', 'HowlerJS', 'Level Design'],
        description: 'The puzzle game where you need to turn all the lights on.',
        content: `
        A remake of a popular puzzle game with more fleshed out puzzle design.
        Can you solve all 14 levels? Turn all the lights on, it shouldn't be that hard... right?
        With each click, adjacent lamps toggle and you have to fiddle around to find the right pattern.
        
        <br>
        <br>
        In the bottom left, you can see your own clicks and the ideal amount of clicks needed to solve the level.
        Don't worry, you can keep clicking beyond the perfect score without being punished and your progress
        is saved even if you close the tab.
        `
    },
    {
        name: 'Flag Quiz',
        link: 'https://flagquiz.warze.org',
        image: 'flagquiz.jpg',
        color: '#FEF08A',
        readmore: 'Features',
        tags: ['VueJS', 'HTML5', 'TypeScript', 'PostCSS', 'TailwindCSS', 'Netlify', 'Web Development', 'JavaScript', 'Webpack', 'CSS'],
        description: 'The fast paced flag quiz.',
        content: `
        <h3>For all types of players</h3>
        Various difficulties and game modes to intuitively learn flags and their origins.

        <h3>Speedrun timer</h3>
        Challenge your friends by daring them to get a faster time than you in a particular game mode.
        `
    },
    {
        name: 'Discord Emoji Status',
        link: 'https://discordstatus.warze.org',
        image: 'discordemojistatus.jpg',
        color: '#26292D',
        readmore: 'Features',
        tags: ['VueJS', 'HTML5', 'TypeScript', 'PostCSS', 'TailwindCSS', 'Netlify', 'Web Development', 'JavaScript', 'Webpack', 'CSS'],
        description: 'The tool for discord customization.',
        content: `
        <h3>Customize your profile</h3>
        Make your discord profile pop using emojis by pasting a pixel of any kind. This tool provides an intuitive interface
        to create, share and experiment. Use it in your about me, your status or just in any chat where emojis are supported.
        
        <h3>Popular on Reddit</h3>
        The tool initially blew up on Reddit in 2021 but I decided to rewrite it in under 24 hours using modern web technologies
        and an overhauled user interface. The reception was immensely positive.
        `
    },
];
