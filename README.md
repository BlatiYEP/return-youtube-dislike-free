# Return YouTube Dislike - Free Edition

[![License](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat)](LICENSE)

**A completely free browser extension that returns the YouTube dislike count - no paywalls, no premium features, no login required.**

This is a GPL v3 fork of the original [Return YouTube Dislike](https://github.com/Anarios/return-youtube-dislike) extension with all premium/paywall features removed.

<p align="center">
    <img width="400px" src="https://user-images.githubusercontent.com/18729296/141743755-2be73297-250e-4cd1-ac93-8978c5a39d10.png"/>
</p>

## What This Fork Does

This fork removes ALL premium/paywall features from the Return YouTube Dislike extension:

- **No Patreon login popups**
- **No "Unlock Premium" panels**
- **No premium analytics teasers**
- **100% free functionality**

All core features remain fully functional:
- View dislike counts on YouTube videos
- See like/dislike ratio bars
- Submit your own votes
- Works on regular videos and YouTube Shorts

## Installation

**Note:** The extension is already pre-built in the repository. You don't need to run `npm install` or `npm build` unless you want to modify the source code.

### Chrome/Edge/Brave

1. Download or clone this repository:
   ```bash
   git clone https://github.com/BlatiYEP/return-youtube-dislike-free.git
   ```
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the folder: `Extensions/combined/dist/chrome`

### Firefox

1. Download or clone this repository:
   ```bash
   git clone https://github.com/BlatiYEP/return-youtube-dislike-free.git
   ```
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select any file in: `Extensions/combined/dist/firefox`

## Building from Source

If you want to build the extension yourself:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Or build for development with watch mode
npm run dev
```

The built extension will be in `Extensions/combined/dist/chrome` (or `firefox`/`safari`).

## What Was Removed

This fork removes the following premium/paywall features:

1. **Premium Analytics UI** - The entire `premiumAnalytics` folder
2. **Patreon Authentication** - All login/logout/OAuth code
3. **Premium Teasers** - "Unlock Premium" panels and popups
4. **Premium CSS** - All premium-related styling (~653 lines)

See the [NOTICE](NOTICE) file for detailed modification documentation.

## Important Note

The actual premium analytics data (activity timelines, country breakdowns, etc.) is **server-side API-protected** and cannot be bypassed by client-side modifications. This fork only removes the client-side UI prompts that ask you to pay for premium features.

The core dislike counting functionality uses the public API and works perfectly in this free fork.

## License

This project is licensed under **GNU General Public License v3.0** - the same license as the original project.

You are free to:
- Use this software for any purpose
- Share the software with anyone
- Modify the software
- Distribute your modifications

You must:
- Include the license and copyright notices
- State any significant changes made
- Make source code available when distributing
- License derivative works under GPL-3.0

See [LICENSE](LICENSE) for the full license text.

## Credits

This is a fork of the excellent [Return YouTube Dislike](https://github.com/Anarios/return-youtube-dislike) project.

- **Original Author**: Dmitry Selivanov & Community
- **Original Repository**: https://github.com/Anarios/return-youtube-dislike
- **Original Website**: https://www.returnyoutubedislike.com/

If you appreciate this software, please consider supporting the original project!

## Modifications

- **Fork Created**: October 22, 2025
- **Modified By**: Community fork (GPL v3)
- **Changes**: Removed all premium/paywall features to create a 100% free version

For a complete list of modifications, see the [NOTICE](NOTICE) file.

## Support

This is a community fork. For issues with the core functionality, refer to the original project's documentation:

- **Original FAQ**: https://www.returnyoutubedislike.com/faq
- **Original Discord**: https://discord.gg/returnyoutubedislike
- **Original GitHub**: https://github.com/Anarios/return-youtube-dislike

For issues specific to this fork (premium feature removal), please open an issue in this repository.

## Why This Fork Exists

The original Return YouTube Dislike extension introduced premium features behind a Patreon paywall. While supporting open-source developers is important, the GPL v3 license explicitly allows creating free versions.

This fork exercises that right by removing the paywalls while:
- Crediting the original authors
- Maintaining the GPL v3 license
- Keeping all core functionality intact
- Encouraging support for the original project

## Disclaimer

This fork is not affiliated with or endorsed by the original Return YouTube Dislike project. It is an independent fork created under the terms of the GPL v3 license.

The original authors have every right to monetize their work, and this fork does not aim to undermine that. However, GPL v3 also grants users the right to modify and redistribute the software without restrictions, which is what this fork exercises.

If you want premium analytics features, please consider supporting the original project on Patreon. This fork only removes the UI prompts - the actual premium data is still server-side protected.

## API Documentation

This fork uses the same public API as the original project:

**Base URL**: https://returnyoutubedislikeapi.com

**Rate Limits**: 100 requests/minute, 10,000 requests/day

Example to get votes for a video:
```
GET /votes?videoId=kxOuG8jMIgI
```

Full API documentation: https://returnyoutubedislikeapi.com/swagger/index.html

## Contributing

This is a community-maintained fork. Contributions are welcome! Please ensure:
- You follow the GPL v3 license
- You credit the original authors
- You document your changes
- You update the NOTICE file

## The Story

On November 10th, 2021, Google announced that the YouTube dislike count would be removed. The Return YouTube Dislike project was created to restore this functionality using crowdsourced data from extension users.

This fork continues that mission by ensuring the extension remains free and accessible to everyone, without paywalls or premium features.
