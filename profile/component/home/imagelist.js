import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useTheme } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';


export default function TitlebarImageList({photo}) {
  const theme = useTheme()
    const isTinyScreen = useMediaQuery(theme.breakpoints.down('md'))
    const isTinyScreenSM = useMediaQuery(theme.breakpoints.down('sm'))

    const [col, setcol] = React.useState(3)
    React.useEffect(() => {
        if (isTinyScreenSM == false & isTinyScreen == true) { setcol(2) }
        else if (isTinyScreenSM == true & isTinyScreenSM == true) { setcol(1) }
        else if (isTinyScreenSM == false & isTinyScreenSM == false) { setcol(3) }
    }, [isTinyScreenSM,isTinyScreen])

  return (
    <ImageList cols={col} >
      
      {photo.map((item, index) => (
        <ImageListItem key={item.index}>
          <Image  src={item.img} height={500} width={500} />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)'}}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

