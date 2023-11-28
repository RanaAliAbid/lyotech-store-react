import Header from '../../common/header';
import Footer from '../../common/footer';
import { List, ListItem, ListItemText } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Home.module.css';
import { Work_Sans } from 'next/font/google';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent } from 'react';

const workSans = Work_Sans({ subsets: ['latin'] });
import { createTheme, ThemeProvider } from '@mui/material';

const tabsData = [
  'Switch phone ON and OFF',
  'Sound Setting',
  'Wi-Fi',
  'Select Network',
  'Picture Messages',
  'Security Codes',
  'Find My Device',
  'Phone is slow',
  'Internet',
  'Bluetooth',
  'Sync',
  'Calls',
  'Contacts',
  'I can’t start my',
  'Hotspot Tethering',
  'NFC',
  'Display Setting',
  'Text Messages',
  'Emails',
  'Apps',
  'Camera',
  'Browser',
  'GPS, Maps and Navigation',
  'Software',
  'Hard Reset',
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Troubleshooting() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Work Sans'].join(','),
    },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(Number(event.target.value));
  };

  const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <main className={styles.main}>
            <Header title="Home" />
            {/* Banner Section Start */}
            {/* Banner Section Start */}
            <div className={`${styles['aboutUs']} ${styles['infoBannerWrap']}`}>
              <div className={`${styles['infoBanner']}`}>
                <Container className={styles.containerBox}>
                  <Grid container spacing={3} className={styles.bannerWrap}>
                    <Grid item md={12} xs={12}>
                      <Typography variant="h1" className={styles.bannerHD}>
                        Troubleshooting
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
            {/* Banner Section End */}

            <Container className={styles.containerBox}>
              <Grid container spacing={3} className={styles.troubleshootSec}>
                <Grid item md={12} sm={12}>
                  <Typography variant="h1">
                    Basic Troubleshooting Tips for <span> L One Phone </span>
                  </Typography>
                </Grid>

                <Grid item md={12} xs={12}>
                  <div
                    style={{
                      flexGrow: 1,
                      backgroundColor: 'background.paper',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Select dropdown for small screens */}

                    <Select
                      value={value}
                      onChange={(e) =>
                        handleChange(e as React.ChangeEvent<any>)
                      }
                      displayEmpty
                      sx={{ marginBottom: 2 }}
                      className={styles.mobileSelectDrop}
                    >
                      {tabsData.map((tab, index) => (
                        <MenuItem key={index} value={index}>
                          {tab}
                        </MenuItem>
                      ))}
                    </Select>

                    <div className={styles.troubleshootTabsWrap}>
                      {/* Tabs for larger screens */}

                      <div className={styles.troubleshootTabs}>
                        <Tabs
                          orientation="vertical"
                          variant="scrollable"
                          value={value}
                          onChange={handleTabsChange}
                          aria-label="Vertical tabs example"
                          sx={{
                            borderRight: 1,
                            borderColor: 'divider',
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiTabs-indicator': {
                              display: 'none',
                            },
                          }}
                        >
                          {tabsData.map((tab, index) => (
                            <Tab
                              key={index}
                              label={tab}
                              {...a11yProps(index)}
                              className={
                                value === index ? styles.activeTab : ''
                              }
                            />
                          ))}
                        </Tabs>
                      </div>

                      {/* Tab panels for content */}

                      <div className={styles.troubleshootPanels}>
                        <TabPanel value={value} index={0}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Phone not turning On
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Is the phone charged?
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  If yes, go to step number 7.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If no, connect a charger to the phone socket
                                  and the other end to a wall socket.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  When the battery charging icon is displayed,
                                  the battery is charging.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step.
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn the phone ON
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={7}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Press and hold the side key till the phone is
                                  powered up.
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Enter your PIN and tap the arrow right button.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn the phone Tap Off/Restart
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={10}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Press and hold the side key.
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap Power  <strong> Off/Restart </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Turn off Silent Mode
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Press the upper or lower part of the volume
                                  key
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the sound mode icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the bell icon to switch to general mode
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Select ring tone
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={6}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong>Sound and vibration</strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong>Phone ringtone</strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select your preferred ring tone and Tap{' '}
                                  <strong> OK </strong>
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Select message tone
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={11}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Go to your message application
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the menu icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Messages settings
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In <strong>Default settings</strong>, tap <strong>Incoming messages </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap <strong>Sound</strong></Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select your preferred message tone and Tap 
                                  <strong> OK </strong>
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Select ring volume
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={17}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Press the upper or lower part of the volume
                                  key
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the three dots button
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Make sure to choose the correct settings
                                  (Media volume, Call volume..etc.)
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap Done</Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={2}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">Wi-Fi</Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  What is the<strong>   Wi-Fi    </strong>issue?
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  The phone is not connected to a Wi-Fi network
                                  - Go to step 6
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  The phone can't find a<strong>   Wi-Fi    </strong>network - Go to
                                  step 16
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  The<strong>   Wi-Fi    </strong>network rejects the connection - Go
                                  to step 32
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  The phone is connected to a Wi-Fi network, but
                                  you're not logged on - Go to step 36
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Connect to a Wi-Fi network
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={6}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap <strong>Wi-Fi</strong></Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Switch<strong>   Wi-Fi    </strong>On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Connect to the required Wi-Fi Network
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in the relevant password
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap CONNECT
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact
                                  (Escalation Point)
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Phone Can't find a Wi-Fi network
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={16}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  If the network is not hidden, find a place
                                  with available Wi-Fi networks and try
                                  establishing a connection again
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the network is hidden, go to the next step
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap <strong>Wi-Fi</strong></Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Switch<strong>   Wi-Fi    </strong>On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap Add network
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in the relevant network name
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  From Security drop-down menu, select
                                  WPA/WPA2-Personal
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap <strong> SAVE</strong></Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in the relevant password
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong>CONNECT</strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact
                                  (Escalation Point)
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              The Wi-Fi network rejects the connection
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={32}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  This may be due to a Wi-Fi network error or
                                  that you don't have the correct connection
                                  credentials
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Contact the administrator of the Wi-Fi network
                                  to obtain the correct connection settings
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact
                                  (Escalation Point)
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              The phone is connected to a<strong>   Wi-Fi    </strong>network, but
                              you're not logged on
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={36}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers upwards starting from the
                                  bottom of the screen to see the apps page
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Open the internet browser on your phone and
                                  try to load a web page
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  The internet browser is redirected to the
                                  homepage of the Wi-Fi network
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Follow the instructions on the screen to log
                                  on to the Wi-Fi network
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact
                                  (Escalation Point)
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={3}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Make sure flight mode is off
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn Aeroplane mode off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              No Signal everywhere
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={7}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Advanced </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and Switch Automatically select
                                  network Off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Wait while the phone searches for networks
                                  (This may take a couple of minutes)
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the network manually
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the arrow left button to get back
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Switch Automatically select network On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Select the network mode (In case of intermittent
                              service)
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={18}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Advanced </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Preferred network type </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If 5G or 4G are providing intermittent signal,
                                  it's preferred to select 2G
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={4}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Picture Messages
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Can the user make phone calls?
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  If no, follow Calls for troubleshooting
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If yes, Check whether the user is abroad
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If yes, go to the next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Switch Roaming On
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={6}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Find Mobile Data
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn Mobile data On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn Roaming On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact your
                                  carrier's Customer support for further
                                  assistance
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              There's an error at the receiving end
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={17}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Is the user facing this issue while sending
                                  MMS to one number or multiple numbers?
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  If it's just one number, go to step number 22
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If you have problems making a call to a
                                  specific number, the error may be at the
                                  receiving end.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              The picture message isn't written correctly
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={22}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the message icon
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap Start chat
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In To, type the first characters of the name,
                                  number or email of the recepient's contact
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required contact
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the Text message input field and write the
                                  text for your picture message
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the Picture icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Gallery and go to the required folder
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required picture
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the MMS send icon when you're finished to
                                  send your message
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Switch mobile data On
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={33}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Find Mobile Data
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn mobile data on
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Your phone hasn't been set up for picture
                              messaging correctly
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={42}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Advanced </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and Select Access point names
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press the 3 dots on the top right corner of
                                  the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press Reset to default
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact your
                                  carrier's Customer support for further
                                  assistance
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={5}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Turn use of SIM PIN on or off
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Security
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap More security settings
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap SIM card lock
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to the next
                                  step
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the indicator next to Lock SIM card to
                                  turn on or off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in your PIN and Tap <strong> OK </strong>
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn on Phone lock
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={10}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Security
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Device security, tap Face & Fingerprint
                                  Unlock
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required phone lock and follow the
                                  on-screen instructions to create an additional
                                  lock code
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">Change PIN</Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={15}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Security
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Device security, tap More security
                                  settings
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap SIM card lock
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Lock SIM card
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in your old PIN and Tap{' '}
                                  <strong> OK </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in your new PIN and Tap{' '}
                                  <strong> OK </strong>
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">Enter PUK</Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={23}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Key in your PUK and tap the arrow right
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Key in your new 4 digits PIN and tap the arrow
                                  right
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in your new 4 digits PIN again and tap the
                                  arrow right
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={6}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Switching Turn My Device Feature On
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap Google
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Find My Device
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the indicator next to Use Find My Device
                                  to turn the feature on or off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={7}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Restart the Phone
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Press and hold the power button
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap Restart
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              End running applications
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={5}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Press the side key
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers slowly updwards starting
                                  from the bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  To end one running application, slide your
                                  finger upwards on the required application
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  To end all running applications, tap Clear all
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={8}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              General Troubleshooting
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  To use the phone's internet connection when
                                  abroad, data roaming needs to be turned on. If
                                  you're roaming, go to step 38
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Can you make a voice call?
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If yes, restart your phone. Go to next step
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If no, is this happening with one number?
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If no, go to step number 10
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If yes, try to call another number. Is it
                                  working?
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If yes, the error may be at the receiving end
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Contact your carrier's Customer support for
                                  further assistance
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Check if this is happening everywhere or in a
                                  certain area
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If there's a general problem making phone
                                  calls in a certain area, it may be be due to a
                                  temporary network error
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Go to step number 8
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If this is happening everywhere, go to next
                                  step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Restart the Phone
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={14}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Press and hold the power button
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Restart
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Switch mobile data On
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={18}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Find Mobile Data
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn mobile data on
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">APN Setup</Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={27}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Advanced </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and Select Access point names
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press the 3 dots on the top right corner of
                                  the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press Reset to default
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Switch Roaming On
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={38}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Find Mobile Data
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn Mobile data On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn Roaming On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact your
                                  carrier's Customer support for further
                                  assistance
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Your number has been suspended
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={49}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  If your number has been suspended, you'll be
                                  notified when you try to make a call
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Contact your Service Provider Customer Support
                                  for help
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Restart the Phone
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={53}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Press and hold the power button
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Restart
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn off flight mode
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={57}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn Aeroplane mode off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn on automatic network selection
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={63}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Advanced </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Navigate to Network, and turn Automatically
                                  select network On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn on automatic network mode selection
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={72}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Advanced </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Preferred network type </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required network mode
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact
                                  (Escalation point) for assistance
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={9}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">Bluetooth</Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Some Bluetooth devices are password protected.
                                  You need to key in the password on your phone
                                  if needed to establish a connection
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to the next
                                  step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Bluetooth is turned off on your phone
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={4}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Connected devices
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Connetion preferences
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Bluetooth
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Switch Use Bluetooth On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, Are you trying
                                  to connect to another device or is another
                                  device trying to connect to your phone
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If another device is trying to connect to your
                                  phone, go to step 24
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If you're using your phone to connect to
                                  another device, go to step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Bluetooth is turned off on the other device
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={14}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  To connect to another Bluetooth device,
                                  Bluetooth needs to be turned on on the other
                                  device
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to the next
                                  step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Bluetooth visibility is turned off on the other
                              device
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={17}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  To see the other Bluetooth device on the list
                                  of available devices, Bluetooth visibility
                                  needs to be turned on on the other device
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to the next
                                  step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              There's an error on the other device
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={20}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Try establishing a connection to another
                                  Bluetooth device
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, the issue is from
                                  the other device. Skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to the next
                                  step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              The distance between the two devices is too long
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={23}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Place the devices within 10 metres of each
                                  other
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, the issue is from
                                  the other device. Skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact
                                  (Escalation Point)
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn on Bluetooth visibility
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={26}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  PSlide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap Location
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Location Services
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Bluetooth scanning
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Switch Bluetooth scanning On
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact
                                  (Escalation Point)
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={10}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Back up pictures and video clips
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers upwards starting from the
                                  bottom of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap Photos to go to the required foler
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press and hold the required items (Pictures
                                  and video clips)
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the Share icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press the Drive icon. If you don't see the
                                  Drive icon Tap More, then it will appear
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Folder, tap on the field below to go to the
                                  required folder
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  To create a new folder, tap the new folder
                                  icon and follow onscreen instructions
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Once done, Tap Select
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap Save</Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn automatic synchronisation On or Off
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={11}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap{' '}
                                  <strong> Passwords and accounts </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Accounts for Owner, Switch Automatically
                                  sunc app data On or Off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> OK </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={11}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">Calls</Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Is the issue with calling all numbers or a
                                  specific number?
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  For all numbers, go to step number7
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  For a specific number, go to the next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              There's an error at the receiving end
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={4}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  If you have problems making a call to a
                                  specific number, the error may be at the
                                  receiving end.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Is the call abroad? If no, go to step number 7
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If yes, go to step number 11
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              There is a temporary network problem
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={7}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Is the issue happening in one certain area or
                                  everywhere?
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If there's a general problem making phone
                                  calls in a certain area, it may be be due to a
                                  temporary network error
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Contact your carrier's customer support for
                                  help
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If this is happening everywhere, go to step
                                  number 17
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Making/receiving calls abroad
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={11}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  If you try to make or receive calls when
                                  abroad, roaming needs to be activated in your
                                  price plan
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Contact your carrier customer support for help
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Your number has been suspended
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={14}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  If your number has been suspended, you'll be
                                  notified when you try to make a call.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Contact your carrier's customer services for
                                  support
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Restart the Phone
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={18}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  If your phone is overloaded, you can't make
                                  any calls. It may help restarting it.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press and hold the power button
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Restart
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn off flight mode
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={23}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn Aeroplane mode off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              The selected network is out of range
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={29}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Advanced </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the indicator next to Automatically select
                                  network to turn off the function
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Wait while your phone searches for networks
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required network manually
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap arrow left
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the indicator next to Automatically select
                                  network to turn on the function
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              The selected network mode is not available
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={41}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sim card & mobile data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Mobile network </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Advanced </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Preferred network type </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required network mode
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Fixed dialling is turned on
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={51}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the phone icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the three vertical dots to view the menu
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Settings
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Calling accounts
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the name of the SIM
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If Fixed dialling numbers is an option, this
                                  means that the feature is on, tap Fixed
                                  dialling numbers
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Enable FDN
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in your PIN2 - the default PIN2 is 1111
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> OK </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Disable FDN
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in your PIN2 - the default PIN2 is 1111
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> OK </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, Try the SIM card
                                  in another device
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, This means the Phone
                                  is faulty, contact [Support channel] for
                                  support
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, The SIM card is
                                  faulty, contact your carrier's customer
                                  support for help
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={12}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Create a contact
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong>Contacts</strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the "+" sign to create a new contact
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  From the Save to drop-down menu, select Device
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In the relevant fields, key in the respective
                                  required details
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap Save</Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Import contacts from your SIM to your phone
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={7}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Contacts
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap<strong> Fix & manage </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap<strong> Manage SIM </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select all required contacts to import
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong>Import</strong>
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Copy contacts from social networks and email
                              accounts to your phone
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={13}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Passwords and accounts </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the required account
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Account sync </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press the indicator next to Contacts to switch
                                  it on
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={13}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              I can't start my
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Can you turn on your phone?
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  If yes, go to step number
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If no, follow Switch phone on and off
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              The phone lock code is turned on
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={4}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Security
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Device security, tap Face & Fingerprint
                                  Unlock
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required phone lock and follow the
                                  on-screen instructions to create an additional
                                  lock code
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, go to the next
                                  step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              SIM Card is blocked
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={11}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  If the SIM requires a PUK or is permanently
                                  block, contact your carrier's customer support
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={14}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Hotspot Tethering
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Can you use the phone's internet connection?
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  If no, follow Internet troubleshooting
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If yes, go to the next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Setup the phone to use as a Wi-Fi hotspot
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={4}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Connected devices
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Connection preferences
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Hotspot and tethering
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap<strong>   Wi-Fi    </strong>hotspot
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Hotspot name
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in the required Wi-Fi hotspot name
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> OK </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Security
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select WPA2/WPA3-Personal
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Hotspot password
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in the required Wi-Fi hotspot password
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> OK </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Switch Use<strong>   Wi-Fi    </strong>hotspot on
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide your finger upwards starting from the
                                  bottom of the screen to return to the home
                                  screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Turn on Wi-Fi on the other device
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Scan for the available Wi-Fi networks and
                                  select your own Wi-Fi hotspot
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in the password for your<strong>   Wi-Fi    </strong>hotspot and
                                  establish the connection
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, contact
                                  (Escalation Point)
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={15}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">NFC</Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Connected devices
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Connetion preferences
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap NFC</Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Switcch NFC On or Off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={16}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Select Language
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap System
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Language and input
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Languages
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Add a language
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select your required language
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Select a Default language
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={8}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  To select a default language, tap the move
                                  icon (Two horizontal lines) next to the
                                  required language
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Drag it to the top of the list
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers upwards starting from the
                                  bottom section of the screen to return to the
                                  home screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Select Date and Time
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={12}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap System
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Date and time
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Set time automatically
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select Use network-provided time
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the Indicator next to Automatic time zone
                                  to turn on the function
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Adjust Screen brightness
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={19}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap System
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Display
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Brightness
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Drag the brightness indicator right to left to
                                  select the required brightness level
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the Indicator next to Adaptive brightness
                                  to turn automatic brightness on and off
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn notifications on and off
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={26}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap Apps</Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> See all apps </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the required app
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Notifications
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the indicator next to All notifications to
                                  turn notifications on or off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={17}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Write and send text message
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the message icon
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap Start chat
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In To, type the first characters of the name,
                                  number or email of the recepient's contact
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required contact
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the Text message input field and write the
                                  text required
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the SMS send icon when you're finished to
                                  send your message
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Text messages Troubleshooting
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={7}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Can the user make phone calls?
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If no, follow Calls for troubleshooting
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If yes, Is this happening with all numbers or
                                  just one number?
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If with all numbers, go to step number 15
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If it's one number, go to the next step
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              There's an error at the receiving end
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={12}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  If you have problems making a call to a
                                  specific number, the error may be at the
                                  receiving end.
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Is the call abroad? If no, go to step number 7
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If yes, go to step number 11
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              The text message isn't written correctly
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={15}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the message icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Start chat
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In To, type the first characters of the name,
                                  number or email of the recepient's contact
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required contact
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the Text message input field and write the
                                  text required
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the SMS send icon when you're finished to
                                  send your message
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, Try the SIM card
                                  in another device
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is resolved, This means the Phone
                                  is faulty, contact [Support channel] for
                                  support
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Skip to End
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the issue is not resolved, The SIM card is
                                  faulty, contact your carrier's customer
                                  support for help
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={18}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Set up your POP3 Email
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Passwords and accounts </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> +Add account </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select Personal (POP3)
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Enter the email address, and key in your
                                  email address
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Password, and key in your password
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If it shows Account options page, this means
                                  that the account is recognized and set up
                                  automatically
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Follow the on-screen instructoions to key in
                                  more information and finish{' '}
                                  <strong> setting </strong>up your account
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Incoming server settings, enter your
                                  account details
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Port, key in 110
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Security type drop-down menu, select
                                  None
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Delete emails from server drop-down menu
                                </Typography>
                                <Typography variant="h5">
                                  Select Never, when you want to keep the emails
                                  on the server even when you delete them
                                </Typography>
                                <Typography variant="h5">
                                  Select When I delete from Inbox, when you want
                                  to keep the emails on the server even when you
                                  delete them
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the indicator next to{' '}
                                  <strong>Require sign-in </strong> to turn on
                                  the function
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Enter the required fields
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Port, key in 25
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press the drop-down menu below Security type
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select <strong> None </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press the drop-down menu below{' '}
                                  <strong> Sync frequency </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required setting
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tick
                                  <strong>
                                    {' '}
                                    Notify me when emails arrive{' '}
                                  </strong>{' '}
                                  to turn the function on or off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tick{' '}
                                  <strong>Sync email for this account</strong>{' '}
                                  to turn the function on or off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  A screen will appear with the following
                                  message{' '}
                                  <strong>
                                    {' '}
                                    Your account is set up and emails are on
                                    their way!
                                  </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In <strong> Account name (optional) </strong>{' '}
                                  key in the required name
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In <strong> Your name </strong>, key in the
                                  required sender name
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Write and send messages
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={31}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers upwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the Gmail icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the email account icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required email account
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Compose
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press To and key in the recepient's email
                                  address
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Subject and key in the required subject
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the text input field and write the text of
                                  your email message
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If you want to attach a file, tap the
                                  paperclip icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Attach a file
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Navigate through the phone and select the
                                  required attachment
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Once you've finished your email message tap
                                  Send
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Set up the phone for exchange email
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={43}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers upwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Passwords and accounts </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> +Add account </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Exchange
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Email field, enter your required email
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Password, key in the password to your email
                                  account
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  To select client certificate, tap SELECT and
                                  follow the instructions on the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Domain/Username, key in the domain and the
                                  username separated by a "\"
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Server, enter the server address
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Port, key in 110 the required port number
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Security type drop-down menu, select the
                                  required setting
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap Done</Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the required email account
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Account settings
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In General settings, select the required email
                                  account
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Account name, key in the required name
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> OK </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In <strong> Your name </strong>, enter Your
                                  name
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> OK </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Sync frequency </strong>
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Select the required setting
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tick/untick the box next to{' '}
                                  <strong>Sync email</strong> to turn the
                                  function on or off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tick/untick the box next to{' '}
                                  <strong>Sync contacts</strong> to turn the
                                  function on or off
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tick/untick the box next to{' '}
                                  <strong>Sync calendar</strong> to turn the
                                  function on or off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tick/untick the box next to{' '}
                                  <strong>email notifications</strong> to turn
                                  the function on or off
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Delete email account
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={71}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers upwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Passwords and accounts </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the required email account
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong>Remove account </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  A confirmation pop up will appear, Tap{' '}
                                  <strong> Remove account </strong>
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Set up an IMAP email
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={77}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers upwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Passwords and accounts </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> +Add account </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select <strong> Personal (IMAP) </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Enter the email address, and key in your
                                  email address
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong>Password</strong>, and key in your
                                  password
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If it shows{' '}
                                  <strong>Account options page</strong>, this
                                  means that the account is recognized and set
                                  up automatically
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Follow the on-screen instructoions to key in
                                  more information and finish{' '}
                                  <strong> setting </strong>up your account
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under{' '}
                                  <strong>Incoming server settings</strong>,
                                  enter your account details
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In <strong> Port</strong>, key in{' '}
                                  <strong>143</strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Security type drop-down menu, select
                                  <strong>None </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the indicator next to{' '}
                                  <strong> Require sign-in </strong> to turn on
                                  the function
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Enter the required fields
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Under Port, key in 25
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press the drop-down menu below Security type
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select None
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press the drop-down menu below{' '}
                                  <strong> Sync frequency </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required setting
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tick Notify me when emails arrive to turn the
                                  function on or off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tick Sync email for this account to turn the
                                  function on or off
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  A screen will appear with the following
                                  message Your account is set up and emails are
                                  on their way!
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In Account name (optional) key in the required
                                  name
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In <strong> Your name </strong>, key in the
                                  required sender name
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> NEXT </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={19}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">Install an App</Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Press <strong> Play Store </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the search field
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in the name of the required app and tap
                                  the search icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the required app
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Install
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Uninstall an App
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={7}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press <strong> Play Store </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> the profile icon </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Manage apps and devices
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap Manage</Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the apps to be uninstalled
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Uninstall
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  A pop up will appear to confirm, tap Uninstall
                                  to confirm
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn automatic apps update on
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={15}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Press <strong> Play Store </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> the profile icon </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Settings
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Network preferences </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Auto-update apps
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required option
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap Done</Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Delete temporary Data
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={23}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong>Apps </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> See all apps </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required app
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Storage and cache </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> CLEAR CACHE </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={20}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">Use Camera</Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Select the Camera icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the video recorder is turned on, Tap
                                  Picture
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the camera icon to take a picture
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">Use Camera</Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={5}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the Camera icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If the camera is turned on, Tap Video
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the camera icon to take a picture
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              View pictures and video clips
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={9}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap Photos</Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Go to the required folder and tap the required
                                  picture or video clip
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Share a picture or a video clip
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={12}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">Tap Photos</Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Go to the required folder and tap the required
                                  picture or video clip
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the share button
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the app that you wish to share your
                                  picture/ video on
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Follow on-screen instructions to share your
                                  media
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Take a screenshot
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={18}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Press and hold the power button and the volume
                                  down button for a few seconds
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={21}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Use internet browser
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the interent browser icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the address bar
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Key in the address of the required webpage or
                                  the search word
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the arrow right button on your keypad
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Add the current page as to bookmarks
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={6}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  On your browser active tab, tap the three
                                  vertical dots
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the Star icon to add to bookmarks
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Manage Bookmarks
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={8}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  On your browser active tab, tap the three
                                  vertical dots
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Bookmarks </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  To go to the website directly, select the
                                  required bookmark
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  To Manage, tap the three vertical dots next to
                                  the required bookmark
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Clear browser data
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={12}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the interent browser icon
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the three vertical dots
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Settings
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Privacy and security </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Clear browsing data </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  In <strong> Time range </strong> drop-down
                                  menu, select the required timeframe
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tick the fields next to the required data
                                  fields
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Clear data
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  A pop up will appear, tap{' '}
                                  <strong> Clear </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={22}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Turn GPS on or off
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers updwards starting from the
                                  bottom section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Location
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the indicator next to Use location on or
                                  off
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Turn use of GPS for applications on or off
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={5}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Location
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap App location permissions
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the required app
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Select the required setting
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the arrow left twice
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Location Services
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Google Location Accuracy
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If you tap the indicator next to Improve
                                  Location Accuracy to turn on the function,
                                  your phone can find your exact position using
                                  the GPS satellite
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If you tap the indicator next to Improve
                                  Location Accuracy to turn off the function, it
                                  may take longer for your phone to find your
                                  exact position using the GPS satellite
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>

                        <TabPanel value={value} index={23}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                              Update software
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap <strong> System </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> System Update </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Check for updates </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  If a new software is available, it will be
                                  displayed, follow the on-screen instructions
                                  to update the software
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              Restore factory default settings
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={7}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap <strong> System </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap <strong> Reset options </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap{' '}
                                  <strong>
                                    {' '}
                                    Erase all data (factory reset){' '}
                                  </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap Erase all data,follow the on-screen
                                  instructions to reset the phone to factory
                                  reset
                                </Typography>
                              </ListItem>
                            </List>

                            <Typography variant="h3">
                              View Software version
                            </Typography>

                            <List
                              className={styles.orderedListDecimal}
                              component="ol"
                              start={13}
                            >
                              <ListItem>
                                <Typography variant="h5">
                                  Slide two fingers downwards starting from the
                                  top right section of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Tap the <strong> setting </strong>icon on the
                                  top right corner of the screen
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Scroll down and tap About phone
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                  Your phone's software version is displayed
                                  below <strong> Android version </strong>
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">End</Typography>
                              </ListItem>
                            </List>
                          </div>
                        </TabPanel>



                        <TabPanel value={value} index={24}>
                          <div className={styles.troubleshootPanelsInfo}>
                            <Typography variant="h3">
                            How to hard reset the phone?
                            </Typography>

                            <List className={styles.orderedListDecimal}>
                              <ListItem>
                                <Typography variant="h5">
                                Go <strong> setting </strong>
                                </Typography>
                              </ListItem>
                              <ListItem>
                                <Typography variant="h5">
                                System
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                                Reset Option
                                </Typography>
                              </ListItem>

                              <ListItem>
                                <Typography variant="h5">
                               Tab <strong> Factory Reset </strong>
                                </Typography>
                              </ListItem>

                            </List>

                          </div>
                        </TabPanel>



                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>

            <Footer />
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}
