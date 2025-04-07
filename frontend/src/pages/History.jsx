import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

// import { IconButton } from "@mui/material";

import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Divider,
  Card,
  CardContent,
  Avatar,
  Tooltip,
} from "@mui/material";
import {
  Video,
  Calendar,
  Clock,
  Users,
  Copy,
  ArrowRight,
  Trash2,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/home.css";



// export default function History() {
//   const { getHistoryOfUser } = useContext(AuthContext);

//   const [meetings, setMeetings] = useState([]);

//   const routeTo = useNavigate();

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const history = await getHistoryOfUser();
//         setMeetings(history);
//       } catch {
//         // IMPLEMENT SNACKBAR
//       }
//     };

//     fetchHistory();
//   }, []);

//   let formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, "0");
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const year = date.getFullYear();

//     return `${day}/${month}/${year}`;
//   };

//   return (
//     <div>
//       <IconButton
//         onClick={() => {
//           routeTo("/home");
//         }}
//       >
//         <HomeIcon />
//       </IconButton>
//       {meetings.length !== 0 ? (
//         meetings.map((e, i) => {
//           return (
//             <>
//               <Card key={i} variant="outlined">
//                 <CardContent>
//                   <Typography
//                     sx={{ fontSize: 14 }}
//                     color="text.secondary"
//                     gutterBottom
//                   >
//                     Code: {e.meetingCode}
//                   </Typography>

//                   <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Date: {formatDate(e.date)}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }

export default function History() {

const { getHistoryOfUser, deleteMeetingHistory } = useContext(AuthContext);



    const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();
  

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    // You would typically show a notification here
    alert(`Meeting code ${code} copied to clipboard!`);
  };

   let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

    let deleteHistory = async (code) => {
      await deleteMeetingHistory(code);
      // routeTo("/history");
      setMeetings((prev) => prev.filter((m) => m.meetingCode !== code));
      
    }
    


    useEffect(() => {
      const fetchHistory = async () => {
        try {
          const history = await getHistoryOfUser();
          setMeetings(history);
        } catch {
          // IMPLEMENT SNACKBAR
        }
      };

      fetchHistory();
    });

  return (
    <div className="page-container">
      <Container maxWidth="md" className="history-container">
        <Box className="page-header">
          <IconButton
        onClick={() => {
          routeTo("/home");
        }}
      >
        <HomeIcon className="returnHome"/>
      </IconButton>
          <Typography variant="h4" component="h1" className="page-title">
            Meeting History
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className="page-subtitle"
          >
            View and rejoin your recent video calls
          </Typography>
        </Box>

        <Box className="history-stats">
          <Card className="stat-card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Meetings
              </Typography>
              <Typography variant="h4">{meetings.length}</Typography>
            </CardContent>
          </Card>
          {/* <Card className="stat-card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                This Month
              </Typography>
              <Typography variant="h4">12</Typography>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Hours Spent
              </Typography>
              <Typography variant="h4">18.5</Typography>
            </CardContent>
          </Card> */}
        </Box>

        <Paper elevation={2} className="history-list-container">
          <List className="history-list">
            {meetings.map((e, i) => (
              <React.Fragment key={e.meetingCode}>
                <ListItem className="history-item">
                  <Avatar
                    className={`meeting-avatar ${
                      e.meetingCode ? "starred" : ""
                    }`}
                  >
                    <Video size={20} />
                  </Avatar>
                  <ListItemText
                    primary={
                      <Box className="meeting-primary-info">
                        <Typography
                          variant="subtitle1"
                          className="meeting-code"
                        >
                          {e.meetingCode}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Typography variant="body2" component="span">
                        <Box className="meeting-date-info">
                          <Calendar size={14} />
                          <Typography variant="body2" component="span">
                            {formatDate(e.date)}
                          </Typography>
                        </Box>
                      </Typography>
                    }
                  />
                  <div className="meeting-actions">
                    <Tooltip title="Copy meeting code">
                      <IconButton
                        edge="end"
                        aria-label="copy"
                        onClick={() => copyToClipboard(e.meetingCode)}
                        size="small"
                        className="action-button copy-button"
                      >
                        <Copy size={18} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Join meeting">
                      <IconButton
                        edge="end"
                        aria-label="join"
                        component={Link}
                        to={`/${e.meetingCode}`}
                        size="small"
                        className="action-button join-button"
                      >
                        <ArrowRight size={18} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete from history">
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        size="small"
                        className="action-button delete-button"
                        onClick={() => {
                          deleteHistory(e.meetingCode);
                        }}
                      >
                        <Trash2 size={18} />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
                {i < meetings.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Container>
    </div>
  );
}