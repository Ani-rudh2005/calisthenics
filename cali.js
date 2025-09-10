// Data structure containing all the workout plans.
const skillsData = [
    {
        name: "L-sit Hold",
        tasks: [
            { day: 1, dailyWorkout: [
                { text: "L-sit tuck holds (10s x 3 sets)", rest: "60s" },
                { text: "Hollow body hold (20s x 3 sets)", rest: "60s" },
                { text: "Plank (30s x 3 sets)", rest: "30s" }
            ]},
            { day: 2, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: light stretching", rest: "N/A" },
                { text: "Foam rolling for core and hip flexors", rest: "N/A" }
            ]},
            { day: 3, dailyWorkout: [
                { text: "L-sit tuck holds (12s x 3 sets)", rest: "60s" },
                { text: "Hollow body rock (15 reps x 3 sets)", rest: "60s" },
                { text: "L-sit on parallettes (10s x 3 sets)", rest: "60s" }
            ]},
            { day: 4, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: light cardio (e.g., walking)", rest: "N/A" },
                { text: "Wrist mobility drills", rest: "N/A" }
            ]},
            { day: 5, dailyWorkout: [
                { text: "L-sit tuck holds (15s x 3 sets)", rest: "60s" },
                { text: "V-ups (10 reps x 3 sets)", rest: "90s" },
                { text: "Plank with leg raises (10 reps per leg x 3 sets)", rest: "60s" }
            ]},
            { day: 6, dailyWorkout: [
                { text: "One-leg L-sit holds (10s per leg x 3 sets)", rest: "60s" },
                { text: "Hanging knee raises (10 reps x 3 sets)", rest: "60s" },
                { text: "Tuck L-sit to L-sit transition attempts (3 reps x 3 sets)", rest: "90s" }
            ]},
            { day: 7, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: full-body stretching", rest: "N/A" },
                { text: "Gentle walk or swim", rest: "N/A" }
            ]},
            { day: 8, dailyWorkout: [
                { text: "L-sit tuck holds (20s x 3 sets)", rest: "60s" },
                { text: "Hanging leg raises (8 reps x 3 sets)", rest: "90s" },
                { text: "Leg raises on floor (15 reps x 3 sets)", rest: "60s" }
            ]},
            { day: 9, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: core activation drills", rest: "N/A" },
                { text: "Light massage or stretching", rest: "N/A" }
            ]},
            { day: 10, dailyWorkout: [
                { text: "One-leg L-sit holds (15s per leg x 3 sets)", rest: "60s" },
                { text: "Pike compressions (12 reps x 3 sets)", rest: "60s" },
                { text: "Tuck L-sit to L-sit transition attempts (5 reps x 3 sets)", rest: "90s" }
            ]},
            { day: 11, dailyWorkout: [
                { text: "Hanging leg raises (10 reps x 3 sets)", rest: "90s" },
                { text: "L-sit hold with elevated feet (15s x 3 sets)", rest: "60s" },
                { text: "Hollow body rock (20 reps x 3 sets)", rest: "60s" }
            ]},
            { day: 12, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: light cardio", rest: "N/A" },
                { text: "Wrist warm-up and stretches", rest: "N/A" }
            ]},
            { day: 13, dailyWorkout: [
                { text: "L-sit tuck holds (25s x 3 sets)", rest: "60s" },
                { text: "Hanging leg raises (12 reps x 3 sets)", rest: "90s" },
                { text: "Tuck L-sit to pike L-sit transition attempts (3 reps x 3 sets)", rest: "90s" }
            ]},
            { day: 14, dailyWorkout: [
                { text: "One-leg L-sit holds (20s per leg x 3 sets)", rest: "60s" },
                { text: "Leg raises on floor with a towel (15 reps x 3 sets)", rest: "60s" },
                { text: "Tuck L-sit to straddle L-sit transition attempts (3 reps x 3 sets)", rest: "90s" }
            ]},
            { day: 15, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: foam rolling for hips and lower back", rest: "N/A" },
                { text: "Gentle yoga session", rest: "N/A" }
            ]},
            { day: 16, dailyWorkout: [
                { text: "Hanging leg raises (12 reps x 3 sets)", rest: "90s" },
                { text: "L-sit holds with support (10s x 3 sets)", rest: "90s" },
                { text: "Hollow body hold (30s x 3 sets)", rest: "60s" }
            ]},
            { day: 17, dailyWorkout: [
                { text: "L-sit holds (10s x 3 sets - use support if needed)", rest: "90s" },
                { text: "Pike compressions (15 reps x 3 sets)", rest: "60s" },
                { text: "Hanging windshield wipers (10 reps x 3 sets)", rest: "90s" }
            ]},
            { day: 18, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: core stretches", rest: "N/A" },
                { text: "Light jog or cycle", rest: "N/A" }
            ]},
            { day: 19, dailyWorkout: [
                { text: "L-sit holds (15s x 3 sets - use support if needed)", rest: "90s" },
                { text: "Hanging leg raises (15 reps x 3 sets)", rest: "90s" },
                { text: "L-sit to V-sit attempts (3 reps x 3 sets)", rest: "120s" }
            ]},
            { day: 20, dailyWorkout: [
                { text: "Hanging leg raises (15 reps x 3 sets)", rest: "90s" },
                { text: "L-sit holds (20s x 3 sets)", rest: "90s" },
                { text: "Hollow body rock (30 reps x 3 sets)", rest: "60s" }
            ]},
            { day: 21, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: mobility drills", rest: "N/A" },
                { text: "Static stretches for hamstrings and shoulders", rest: "N/A" }
            ]},
            { day: 22, dailyWorkout: [
                { text: "L-sit holds (20s x 3 sets)", rest: "90s" },
                { text: "Hanging leg raises (15 reps x 4 sets)", rest: "90s" },
                { text: "Pike compressions (20 reps x 3 sets)", rest: "60s" }
            ]},
            { day: 23, dailyWorkout: [
                { text: "Hanging leg raises (15 reps x 4 sets)", rest: "90s" },
                { text: "L-sit holds (25s x 3 sets)", rest: "90s" },
                { text: "V-ups (15 reps x 3 sets)", rest: "90s" }
            ]},
            { day: 24, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: light core workout (e.g., plank variations)", rest: "N/A" },
                { text: "Gentle stretching for entire body", rest: "N/A" }
            ]},
            { day: 25, dailyWorkout: [
                { text: "L-sit holds (25s x 3 sets)", rest: "90s" },
                { text: "Hanging leg raises (20 reps x 3 sets)", rest: "90s" },
                { text: "L-sit to V-sit transition attempts (5 reps x 3 sets)", rest: "120s" }
            ]},
            { day: 26, dailyWorkout: [
                { text: "Hanging leg raises (20 reps x 3 sets)", rest: "90s" },
                { text: "Full L-sit holds (attempt for time) + L-sit tuck holds (30s x 2 sets)", rest: "90s" },
                { text: "V-sit attempts (for time)", rest: "120s" }
            ]},
            { day: 27, dailyWorkout: [
                { text: "Rest" },
                { text: "Active recovery: mobility for shoulders and wrists", rest: "N/A" },
                { text: "Static stretches", rest: "N/A" }
            ]},
            { day: 28, dailyWorkout: [
                { text: "Full L-sit holds (attempt for time) + L-sit tuck holds (30s x 2 sets)", rest: "90s" },
                { text: "Hanging leg raises (25 reps x 3 sets)", rest: "90s" },
                { text: "Pike compressions (30 reps x 3 sets)", rest: "60s" }
            ]},
            { day: 29, dailyWorkout: [
                { text: "Rest" },
                { text: "Complete rest day before test", rest: "N/A" },
                { text: "Mental preparation and visualization", rest: "N/A" }
            ]},
            { day: 30, dailyWorkout: [
                { text: "Test: Attempt a full L-sit hold for as long as possible" },
                { text: "Secondary test: Max reps of Hanging leg raises" },
                { text: "Tertiary test: Max hold of Plank" }
            ]}
        ]
    },
    {
    name: "Planche",
    tasks: [
        { day: 1, dailyWorkout: [
            { text: "Planche leans (15s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (5 reps x 3 sets)", rest: "90s" },
            { text: "Tuck planche attempts (for time)", rest: "60s" }
        ]},
        { day: 2, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light stretching", rest: "N/A" },
            { text: "Wrist mobility drills", rest: "N/A" }
        ]},
        { day: 3, dailyWorkout: [
            { text: "Pseudo planche push-ups (8 reps x 3 sets)", rest: "90s" },
            { text: "Planche leans (20s x 3 sets)", rest: "60s" },
            { text: "Tuck planche holds (5s x 3 sets)", rest: "60s" }
        ]},
        { day: 4, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Foam rolling for shoulders and chest", rest: "N/A" }
        ]},
        { day: 5, dailyWorkout: [
            { text: "Tuck planche holds (5s x 5 sets)", rest: "60s" },
            { text: "Planche leans (25s x 3 sets)", rest: "60s" },
            { text: "Straight arm plank (30s x 3 sets)", rest: "30s" }
        ]},
        { day: 6, dailyWorkout: [
            { text: "Planche leans (20s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (10 reps x 3 sets)", rest: "90s" },
            { text: "Frog stand to tuck planche attempts (3 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 7, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: full-body stretching", rest: "N/A" },
            { text: "Gentle walk or swim", rest: "N/A" }
        ]},
        { day: 8, dailyWorkout: [
            { text: "Pseudo planche push-ups (10 reps x 3 sets)", rest: "90s" },
            { text: "Tuck planche holds (8s x 5 sets)", rest: "60s" },
            { text: "Planche leans (30s x 3 sets)", rest: "60s" }
        ]},
        { day: 9, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: wrist and shoulder mobility", rest: "N/A" },
            { text: "Light massage or stretching", rest: "N/A" }
        ]},
        { day: 10, dailyWorkout: [
            { text: "Tuck planche holds (8s x 5 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (12 reps x 3 sets)", rest: "90s" },
            { text: "Planche leans (35s x 3 sets)", rest: "60s" }
        ]},
        { day: 11, dailyWorkout: [
            { text: "Planche leans (25s x 3 sets)", rest: "60s" },
            { text: "Advanced tuck planche attempts (for time)", rest: "90s" },
            { text: "Straight arm plank (45s x 3 sets)", rest: "30s" }
        ]},
        { day: 12, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Wrist warm-up and stretches", rest: "N/A" }
        ]},
        { day: 13, dailyWorkout: [
            { text: "Pseudo planche push-ups (12 reps x 3 sets)", rest: "90s" },
            { text: "Tuck planche holds (10s x 5 sets)", rest: "60s" },
            { text: "Planche leans (40s x 3 sets)", rest: "60s" }
        ]},
        { day: 14, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: foam rolling for shoulders and upper back", rest: "N/A" },
            { text: "Gentle yoga session focusing on strength", rest: "N/A" }
        ]},
        { day: 15, dailyWorkout: [
            { text: "Tuck planche holds (10s x 5 sets)", rest: "60s" },
            { text: "Advanced tuck planche holds (5s x 3 sets)", rest: "90s" },
            { text: "Pseudo planche push-ups (15 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 16, dailyWorkout: [
            { text: "Advanced tuck planche holds (5s x 3 sets)", rest: "90s" },
            { text: "Planche leans (45s x 3 sets)", rest: "60s" },
            { text: "Straight arm plank (60s x 3 sets)", rest: "30s" }
        ]},
        { day: 17, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: full-body stretching", rest: "N/A" },
            { text: "Light jog or cycle", rest: "N/A" }
        ]},
        { day: 18, dailyWorkout: [
            { text: "Pseudo planche push-ups (15 reps x 3 sets)", rest: "90s" },
            { text: "Advanced tuck planche holds (8s x 3 sets)", rest: "90s" },
            { text: "Planche leans (50s x 3 sets)", rest: "60s" }
        ]},
        { day: 19, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: mobility drills for wrists and elbows", rest: "N/A" },
            { text: "Static stretches for chest and shoulders", rest: "N/A" }
        ]},
        { day: 20, dailyWorkout: [
            { text: "Advanced tuck planche holds (8s x 3 sets)", rest: "90s" },
            { text: "Planche leans (55s x 3 sets)", rest: "60s" },
            { text: "One-leg tuck planche attempts (3s per leg x 3 sets)", rest: "90s" }
        ]},
        { day: 21, dailyWorkout: [
            { text: "Rest" },
            { text: "Complete rest day before test", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 22, dailyWorkout: [
            { text: "Planche leans (30s x 3 sets)", rest: "60s" },
            { text: "Advanced tuck planche holds (10s x 3 sets)", rest: "90s" },
            { text: "Pseudo planche push-ups (18 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 23, dailyWorkout: [
            { text: "Advanced tuck planche holds (10s x 3 sets)", rest: "90s" },
            { text: "One-leg tuck planche holds (5s per leg x 3 sets)", rest: "90s" },
            { text: "Planche leans (60s x 3 sets)", rest: "60s" }
        ]},
        { day: 24, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light core workout (e.g., plank variations)", rest: "N/A" },
            { text: "Gentle stretching for entire body", rest: "N/A" }
        ]},
        { day: 25, dailyWorkout: [
            { text: "Pseudo planche push-ups (20 reps x 3 sets)", rest: "90s" },
            { text: "Advanced tuck planche holds (12s x 3 sets)", rest: "90s" },
            { text: "One-leg advanced tuck planche holds (3s per leg x 3 sets)", rest: "90s" }
        ]},
        { day: 26, dailyWorkout: [
            { text: "Advanced tuck planche holds (12s x 3 sets)", rest: "90s" },
            { text: "Planche leans (60s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (22 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 27, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light foam rolling and stretching", rest: "N/A" },
            { text: "Static stretches for shoulders and wrists", rest: "N/A" }
        ]},
        { day: 28, dailyWorkout: [
            { text: "One-leg tuck planche holds (5s per leg x 3 sets)", rest: "90s" },
            { text: "Straddle planche attempts (for time)", rest: "120s" },
            { text: "Planche leans (70s x 3 sets)", rest: "60s" }
        ]},
        { day: 29, dailyWorkout: [
            { text: "Rest" },
            { text: "Complete rest day before test", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 30, dailyWorkout: [
            { text: "Test: Attempt a full tuck planche hold for as long as possible" },
            { text: "Secondary test: Max reps of Pseudo planche push-ups" },
            { text: "Tertiary test: Max hold of Advanced tuck planche" }
        ]}
    ]
},
    {
    name: "Handstand",
    tasks: [
        { day: 1, dailyWorkout: [
            { text: "Wall handstand holds (20s x 3 sets)", rest: "60s" },
            { text: "Wrist warm-up and stretches", rest: "N/A" },
            { text: "Wall walks (2 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 2, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light stretching", rest: "N/A" },
            { text: "Shoulder mobility drills", rest: "N/A" }
        ]},
        { day: 3, dailyWorkout: [
            { text: "Wall handstand holds (30s x 3 sets)", rest: "60s" },
            { text: "Wrist push-ups (5 reps x 3 sets)", rest: "60s" },
            { text: "Wall handstand shoulder taps (3 per arm x 3 sets)", rest: "60s" }
        ]},
        { day: 4, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Foam rolling for shoulders and back", rest: "N/A" }
        ]},
        { day: 5, dailyWorkout: [
            { text: "Wall handstand holds (45s x 3 sets)", rest: "60s" },
            { text: "Shoulder taps (5 per arm x 3 sets)", rest: "60s" },
            { text: "Wall walks (3 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 6, dailyWorkout: [
            { text: "Wall handstand shoulder taps (5 per arm x 3 sets)", rest: "60s" },
            { text: "Frog stand holds (15s x 3 sets)", rest: "60s" },
            { text: "Wall handstand holds (50s x 3 sets)", rest: "60s" }
        ]},
        { day: 7, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: full-body stretching", rest: "N/A" },
            { text: "Gentle walk or swim", rest: "N/A" }
        ]},
        { day: 8, dailyWorkout: [
            { text: "Wall handstand holds (60s x 3 sets)", rest: "60s" },
            { text: "Wrist push-ups (8 reps x 3 sets)", rest: "60s" },
            { text: "Frog stand to wall handstand attempts (3 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 9, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: wrist and shoulder mobility", rest: "N/A" },
            { text: "Light massage or stretching", rest: "N/A" }
        ]},
        { day: 10, dailyWorkout: [
            { text: "Wall handstand shoulder taps (8 per arm x 3 sets)", rest: "60s" },
            { text: "Wall handstand holds (70s x 3 sets)", rest: "60s" },
            { text: "Frog stand holds (20s x 3 sets)", rest: "60s" }
        ]},
        { day: 11, dailyWorkout: [
            { text: "Frog stand to handstand attempts (5 reps x 3 sets)", rest: "90s" },
            { text: "Wall handstand holds (80s x 3 sets)", rest: "60s" },
            { text: "Handstand shrugs (10 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 12, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Wrist warm-up and stretches", rest: "N/A" }
        ]},
        { day: 13, dailyWorkout: [
            { text: "Wall handstand holds (90s x 3 sets)", rest: "60s" },
            { text: "Wrist push-ups (10 reps x 3 sets)", rest: "60s" },
            { text: "Frog stand holds (30s x 3 sets)", rest: "60s" }
        ]},
        { day: 14, dailyWorkout: [
            { text: "Wrist push-ups (10 reps x 3 sets)", rest: "60s" },
            { text: "Wall handstand shoulder taps (10 per arm x 3 sets)", rest: "60s" },
            { text: "Freestanding handstand attempts (for time)", rest: "90s" }
        ]},
        { day: 15, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: foam rolling for shoulders and upper back", rest: "N/A" },
            { text: "Gentle yoga session focusing on inversions", rest: "N/A" }
        ]},
        { day: 16, dailyWorkout: [
            { text: "Wall handstand shoulder taps (10 per arm x 3 sets)", rest: "60s" },
            { text: "Wall handstand holds (100s x 3 sets)", rest: "60s" },
            { text: "Handstand shrugs (15 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 17, dailyWorkout: [
            { text: "Frog stand to handstand attempts (8 reps x 3 sets)", rest: "90s" },
            { text: "Freestanding handstand attempts (for time)", rest: "90s" },
            { text: "Wall walks (5 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 18, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Static stretches for shoulders and wrists", rest: "N/A" }
        ]},
        { day: 19, dailyWorkout: [
            { text: "Wall handstand holds (120s x 3 sets)", rest: "60s" },
            { text: "Wrist push-ups (15 reps x 3 sets)", rest: "60s" },
            { text: "Handstand shrugs (20 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 20, dailyWorkout: [
            { text: "Wrist push-ups (15 reps x 3 sets)", rest: "60s" },
            { text: "Frog stand holds (45s x 3 sets)", rest: "60s" },
            { text: "Freestanding handstand attempts (for time)", rest: "90s" }
        ]},
        { day: 21, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light foam rolling and stretching", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 22, dailyWorkout: [
            { text: "Freestanding handstand attempts (for time) + Wall handstand holds (60s x 2 sets)", rest: "90s" },
            { text: "Frog stand to handstand attempts (10 reps x 3 sets)", rest: "90s" },
            { text: "Wall handstand shoulder taps (12 per arm x 3 sets)", rest: "60s" }
        ]},
        { day: 23, dailyWorkout: [
            { text: "Frog stand to handstand attempts (10 reps x 3 sets)", rest: "90s" },
            { text: "Freestanding handstand attempts (for time)", rest: "90s" },
            { text: "Wrist push-ups (20 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 24, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: gentle stretching for entire body", rest: "N/A" },
            { text: "Light walk or swim", rest: "N/A" }
        ]},
        { day: 25, dailyWorkout: [
            { text: "Freestanding handstand attempts (for time) + Wall handstand holds (90s x 2 sets)", rest: "90s" },
            { text: "Frog stand holds (60s x 3 sets)", rest: "60s" },
            { text: "Handstand shrugs (25 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 26, dailyWorkout: [
            { text: "Wrist push-ups (20 reps x 3 sets)", rest: "60s" },
            { text: "Freestanding handstand attempts (for time)", rest: "90s" },
            { text: "Wall handstand holds (120s x 3 sets)", rest: "60s" }
        ]},
        { day: 27, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light mobility for shoulders and wrists", rest: "N/A" },
            { text: "Static stretches", rest: "N/A" }
        ]},
        { day: 28, dailyWorkout: [
            { text: "Freestanding handstand attempts (for time) + Wall handstand holds (120s x 2 sets)", rest: "90s" },
            { text: "Frog stand to handstand attempts (12 reps x 3 sets)", rest: "90s" },
            { text: "Wall handstand shoulder taps (15 per arm x 3 sets)", rest: "60s" }
        ]},
        { day: 29, dailyWorkout: [
            { text: "Rest" },
            { text: "Complete rest day before test", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 30, dailyWorkout: [
            { text: "Test: Attempt a freestanding handstand for as long as possible" },
            { text: "Secondary test: Max reps of Wrist push-ups" },
            { text: "Tertiary test: Max hold of Wall handstand" }
        ]}
    ]
},
    {
    name: "Pull-over",
    tasks: [
        { day: 1, dailyWorkout: [
            { text: "Skin the cat (3 reps x 3 sets)", rest: "60s" },
            { text: "Pull-ups (3 reps x 3 sets)", rest: "90s" },
            { text: "German hang attempts (15s x 3 sets)", rest: "60s" }
        ]},
        { day: 2, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light stretching for shoulders and lats", rest: "N/A" },
            { text: "Wrist mobility drills", rest: "N/A" }
        ]},
        { day: 3, dailyWorkout: [
            { text: "German hang (30s x 3 sets)", rest: "60s" },
            { text: "Skin the cat (5 reps x 3 sets)", rest: "60s" },
            { text: "Pull-ups (5 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 4, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Foam rolling for back and lats", rest: "N/A" }
        ]},
        { day: 5, dailyWorkout: [
            { text: "Skin the cat (5 reps x 3 sets)", rest: "60s" },
            { text: "German hang (40s x 3 sets)", rest: "60s" },
            { text: "Chin-ups (5 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 6, dailyWorkout: [
            { text: "Pull-ups (5 reps x 3 sets)", rest: "90s" },
            { text: "Skin the cat (8 reps x 3 sets)", rest: "60s" },
            { text: "Straight arm pullover negatives attempts (3 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 7, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: full-body stretching", rest: "N/A" },
            { text: "Gentle walk or swim", rest: "N/A" }
        ]},
        { day: 8, dailyWorkout: [
            { text: "German hang (45s x 3 sets)", rest: "60s" },
            { text: "Pull-ups (8 reps x 3 sets)", rest: "90s" },
            { text: "Straight arm pullover negatives attempts (5 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 9, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: shoulder and back mobility", rest: "N/A" },
            { text: "Light massage or stretching", rest: "N/A" }
        ]},
        { day: 10, dailyWorkout: [
            { text: "Skin the cat (8 reps x 3 sets)", rest: "60s" },
            { text: "German hang (50s x 3 sets)", rest: "60s" },
            { text: "Chin-ups (8 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 11, dailyWorkout: [
            { text: "Pull-ups (8 reps x 3 sets)", rest: "90s" },
            { text: "Straight arm pullover negatives (5 reps x 3 sets)", rest: "90s" },
            { text: "German hang (55s x 3 sets)", rest: "60s" }
        ]},
        { day: 12, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Wrist and elbow warm-up", rest: "N/A" }
        ]},
        { day: 13, dailyWorkout: [
            { text: "German hang (60s x 3 sets)", rest: "60s" },
            { text: "Skin the cat (10 reps x 3 sets)", rest: "60s" },
            { text: "Pull-ups (10 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 14, dailyWorkout: [
            { text: "Straight arm pullover negatives (5 reps x 3 sets)", rest: "90s" },
            { text: "German hang (65s x 3 sets)", rest: "60s" },
            { text: "Pull-ups (12 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 15, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: foam rolling for back and lats", rest: "N/A" },
            { text: "Gentle yoga session focusing on shoulder mobility", rest: "N/A" }
        ]},
        { day: 16, dailyWorkout: [
            { text: "Skin the cat (10 reps x 3 sets)", rest: "60s" },
            { text: "Straight arm pullover negatives (8 reps x 3 sets)", rest: "90s" },
            { text: "German hang (70s x 3 sets)", rest: "60s" }
        ]},
        { day: 17, dailyWorkout: [
            { text: "Pull-ups (10 reps x 3 sets)", rest: "90s" },
            { text: "Straight arm pullover negatives (10 reps x 3 sets)", rest: "90s" },
            { text: "Full pullover attempts (3 reps x 3 sets)", rest: "120s" }
        ]},
        { day: 18, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Static stretches for lats and biceps", rest: "N/A" }
        ]},
        { day: 19, dailyWorkout: [
            { text: "Straight arm pullover negatives (8 reps x 3 sets)", rest: "90s" },
            { text: "German hang (75s x 3 sets)", rest: "60s" },
            { text: "Skin the cat (12 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 20, dailyWorkout: [
            { text: "German hang (75s x 3 sets)", rest: "60s" },
            { text: "Full pullover attempts (5 reps x 3 sets)", rest: "120s" },
            { text: "Pull-ups (12 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 21, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light foam rolling and stretching", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 22, dailyWorkout: [
            { text: "Straight arm pullover negatives (10 reps x 3 sets)", rest: "90s" },
            { text: "Full pullover attempts (6 reps x 3 sets)", rest: "120s" },
            { text: "Skin the cat (15 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 23, dailyWorkout: [
            { text: "Skin the cat (12 reps x 3 sets)", rest: "60s" },
            { text: "Full pullover attempts (8 reps x 3 sets)", rest: "120s" },
            { text: "German hang (80s x 3 sets)", rest: "60s" }
        ]},
        { day: 24, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: gentle stretching for entire body", rest: "N/A" },
            { text: "Light walk or swim", rest: "N/A" }
        ]},
        { day: 25, dailyWorkout: [
            { text: "Full pullover attempts (5 reps x 3 sets)", rest: "120s" },
            { text: "Straight arm pullover negatives (12 reps x 3 sets)", rest: "90s" },
            { text: "Pull-ups (15 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 26, dailyWorkout: [
            { text: "Straight arm pullover negatives (12 reps x 3 sets)", rest: "90s" },
            { text: "Full pullover attempts (10 reps x 3 sets)", rest: "120s" },
            { text: "German hang (90s x 3 sets)", rest: "60s" }
        ]},
        { day: 27, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light mobility for shoulders and back", rest: "N/A" },
            { text: "Static stretches", rest: "N/A" }
        ]},
        { day: 28, dailyWorkout: [
            { text: "Full pullover attempts (8 reps x 3 sets)", rest: "120s" },
            { text: "Skin the cat (15 reps x 3 sets)", rest: "60s" },
            { text: "Pull-ups (18 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 29, dailyWorkout: [
            { text: "Rest" },
            { text: "Complete rest day before test", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 30, dailyWorkout: [
            { text: "Test: Attempt to perform 3 consecutive pull-overs" },
            { text: "Secondary test: Max reps of Pull-ups" },
            { text: "Tertiary test: Max hold of German hang" }
        ]}
    ]
},
    {
    name: "Muscle-up",
    tasks: [
        { day: 1, dailyWorkout: [
            { text: "Explosive pull-ups (5 reps x 3 sets)", rest: "90s" },
            { text: "Straight bar dips (5 reps x 3 sets)", rest: "90s" },
            { text: "False grip hangs (10s x 3 sets)", rest: "60s" }
        ]},
        { day: 2, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light stretching for shoulders and lats", rest: "N/A" },
            { text: "Wrist mobility drills", rest: "N/A" }
        ]},
        { day: 3, dailyWorkout: [
            { text: "False grip hangs (20s x 3 sets)", rest: "60s" },
            { text: "Explosive pull-ups (8 reps x 3 sets)", rest: "90s" },
            { text: "Straight bar dips (8 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 4, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Foam rolling for back and chest", rest: "N/A" }
        ]},
        { day: 5, dailyWorkout: [
            { text: "Straight bar dips (8 reps x 3 sets)", rest: "90s" },
            { text: "False grip hangs (25s x 3 sets)", rest: "60s" },
            { text: "Muscle-up negatives attempts (1 rep x 3 sets)", rest: "120s" }
        ]},
        { day: 6, dailyWorkout: [
            { text: "Explosive pull-ups (8 reps x 3 sets)", rest: "90s" },
            { text: "Straight bar dips (10 reps x 3 sets)", rest: "90s" },
            { text: "False grip hangs (30s x 3 sets)", rest: "60s" }
        ]},
        { day: 7, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: full-body stretching", rest: "N/A" },
            { text: "Gentle walk or swim", rest: "N/A" }
        ]},
        { day: 8, dailyWorkout: [
            { text: "False grip hangs (30s x 3 sets)", rest: "60s" },
            { text: "Muscle-up negatives (3 reps x 3 sets)", rest: "120s" },
            { text: "Explosive pull-ups (10 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 9, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: wrist and shoulder mobility", rest: "N/A" },
            { text: "Light massage or stretching", rest: "N/A" }
        ]},
        { day: 10, dailyWorkout: [
            { text: "Straight bar dips (12 reps x 3 sets)", rest: "90s" },
            { text: "Explosive pull-ups (12 reps x 3 sets)", rest: "90s" },
            { text: "False grip hangs (35s x 3 sets)", rest: "60s" }
        ]},
        { day: 11, dailyWorkout: [
            { text: "Explosive pull-ups (10 reps x 3 sets)", rest: "90s" },
            { text: "Muscle-up negatives (5 reps x 3 sets)", rest: "120s" },
            { text: "Straight bar dips (15 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 12, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Wrist and elbow warm-up", rest: "N/A" }
        ]},
        { day: 13, dailyWorkout: [
            { text: "False grip hangs (45s x 3 sets)", rest: "60s" },
            { text: "Muscle-up negatives (3 reps x 3 sets)", rest: "120s" },
            { text: "Straight bar dips (15 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 14, dailyWorkout: [
            { text: "Muscle-up negatives (3 reps x 3 sets)", rest: "120s" },
            { text: "Explosive pull-ups (12 reps x 3 sets)", rest: "90s" },
            { text: "Muscle-up attempts with feet on ground (3 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 15, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: foam rolling for shoulders and chest", rest: "N/A" },
            { text: "Gentle yoga session focusing on shoulder mobility", rest: "N/A" }
        ]},
        { day: 16, dailyWorkout: [
            { text: "Straight bar dips (15 reps x 3 sets)", rest: "90s" },
            { text: "Muscle-up negatives (5 reps x 3 sets)", rest: "120s" },
            { text: "False grip hangs (50s x 3 sets)", rest: "60s" }
        ]},
        { day: 17, dailyWorkout: [
            { text: "Explosive pull-ups (12 reps x 3 sets)", rest: "90s" },
            { text: "Muscle-up negatives (8 reps x 3 sets)", rest: "120s" },
            { text: "Straight bar dips (18 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 18, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Static stretches for lats and triceps", rest: "N/A" }
        ]},
        { day: 19, dailyWorkout: [
            { text: "Muscle-up negatives (5 reps x 3 sets)", rest: "120s" },
            { text: "False grip hangs (60s x 3 sets)", rest: "60s" },
            { text: "Explosive pull-ups (15 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 20, dailyWorkout: [
            { text: "False grip hangs (60s x 3 sets)", rest: "60s" },
            { text: "Muscle-up attempts with feet on ground (5 reps x 3 sets)", rest: "90s" },
            { text: "Straight bar dips (20 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 21, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light foam rolling and stretching", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 22, dailyWorkout: [
            { text: "Muscle-up negatives (8 reps x 3 sets)", rest: "120s" },
            { text: "Full muscle-up attempts (1 rep x 3 sets)", rest: "180s" },
            { text: "Explosive pull-ups (15 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 23, dailyWorkout: [
            { text: "Muscle-up attempts with feet on ground (5 reps x 3 sets)", rest: "90s" },
            { text: "Muscle-up negatives (10 reps x 3 sets)", rest: "120s" },
            { text: "False grip holds at top (10s x 3 sets)", rest: "90s" }
        ]},
        { day: 24, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: gentle stretching for entire body", rest: "N/A" },
            { text: "Light walk or swim", rest: "N/A" }
        ]},
        { day: 25, dailyWorkout: [
            { text: "Full muscle-up attempts (3 reps x 3 sets)", rest: "180s" },
            { text: "Muscle-up negatives (10 reps x 3 sets)", rest: "120s" },
            { text: "Explosive pull-ups (18 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 26, dailyWorkout: [
            { text: "Muscle-up negatives (10 reps x 3 sets)", rest: "120s" },
            { text: "Full muscle-up attempts (5 reps x 3 sets)", rest: "180s" },
            { text: "Straight bar dips (25 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 27, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light mobility for shoulders and elbows", rest: "N/A" },
            { text: "Static stretches", rest: "N/A" }
        ]},
        { day: 28, dailyWorkout: [
            { text: "Full muscle-up attempts (5 reps x 3 sets)", rest: "180s" },
            { text: "Muscle-up negatives (12 reps x 3 sets)", rest: "120s" },
            { text: "Explosive pull-ups (20 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 29, dailyWorkout: [
            { text: "Rest" },
            { text: "Complete rest day before test", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 30, dailyWorkout: [
            { text: "Test: Attempt to perform 3 consecutive muscle-ups" },
            { text: "Secondary test: Max reps of Explosive pull-ups" },
            { text: "Tertiary test: Max reps of Straight bar dips" }
        ]}
    ]
},
    {
    name: "Elbow Lever",
    tasks: [
        { day: 1, dailyWorkout: [
            { text: "Crow stand (Frog stand) (15s x 3 sets)", rest: "60s" },
            { text: "Straight arm plank (20s x 3 sets)", rest: "30s" },
            { text: "Push-ups (10 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 2, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light stretching for core and wrists", rest: "N/A" },
            { text: "Wrist mobility drills", rest: "N/A" }
        ]},
        { day: 3, dailyWorkout: [
            { text: "Straight arm plank (30s x 3 sets)", rest: "30s" },
            { text: "Crow stand (Frog stand) (20s x 3 sets)", rest: "60s" },
            { text: "Tuck elbow lever attempts (for time)", rest: "60s" }
        ]},
        { day: 4, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Foam rolling for core and shoulders", rest: "N/A" }
        ]},
        { day: 5, dailyWorkout: [
            { text: "Elbow lever attempts (for time)", rest: "60s" },
            { text: "Crow stand (Frog stand) (25s x 3 sets)", rest: "60s" },
            { text: "Straight arm plank (40s x 3 sets)", rest: "30s" }
        ]},
        { day: 6, dailyWorkout: [
            { text: "Crow stand (Frog stand) (20s x 3 sets)", rest: "60s" },
            { text: "Elbow lever attempts (for time)", rest: "60s" },
            { text: "Straight arm plank (45s x 3 sets)", rest: "30s" }
        ]},
        { day: 7, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: full-body stretching", rest: "N/A" },
            { text: "Gentle walk or swim", rest: "N/A" }
        ]},
        { day: 8, dailyWorkout: [
            { text: "Straight arm plank (45s x 3 sets)", rest: "30s" },
            { text: "Crow stand (Frog stand) (30s x 3 sets)", rest: "60s" },
            { text: "Elbow lever attempts (for time)", rest: "60s" }
        ]},
        { day: 9, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: wrist and core mobility", rest: "N/A" },
            { text: "Light massage or stretching", rest: "N/A" }
        ]},
        { day: 10, dailyWorkout: [
            { text: "Elbow lever attempts (for time)", rest: "60s" },
            { text: "Crow stand (Frog stand) (35s x 3 sets)", rest: "60s" },
            { text: "Tuck planche lean (10s x 3 sets)", rest: "60s" }
        ]},
        { day: 11, dailyWorkout: [
            { text: "Tuck planche lean (10s x 3 sets)", rest: "60s" },
            { text: "Straight arm plank (50s x 3 sets)", rest: "30s" },
            { text: "Elbow lever attempts (for time)", rest: "60s" }
        ]},
        { day: 12, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Wrist warm-up and stretches", rest: "N/A" }
        ]},
        { day: 13, dailyWorkout: [
            { text: "Crow stand (Frog stand) (30s x 3 sets)", rest: "60s" },
            { text: "Elbow lever attempts (for time)", rest: "60s" },
            { text: "Tuck planche lean (15s x 3 sets)", rest: "60s" }
        ]},
        { day: 14, dailyWorkout: [
            { text: "Elbow lever attempts (for time)", rest: "60s" },
            { text: "Straight arm plank (60s x 3 sets)", rest: "30s" },
            { text: "Elbow lever attempts with straight legs (for time)", rest: "90s" }
        ]},
        { day: 15, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: foam rolling for shoulders and upper back", rest: "N/A" },
            { text: "Gentle yoga session focusing on core strength", rest: "N/A" }
        ]},
        { day: 16, dailyWorkout: [
            { text: "Straight arm plank (60s x 3 sets)", rest: "30s" },
            { text: "Elbow lever attempts with straight legs (for time)", rest: "90s" },
            { text: "Crow stand (Frog stand) (40s x 3 sets)", rest: "60s" }
        ]},
        { day: 17, dailyWorkout: [
            { text: "Tuck planche lean (15s x 3 sets)", rest: "60s" },
            { text: "Elbow lever attempts with straight legs (for time)", rest: "90s" },
            { text: "Crow stand (Frog stand) (45s x 3 sets)", rest: "60s" }
        ]},
        { day: 18, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Static stretches for core and wrists", rest: "N/A" }
        ]},
        { day: 19, dailyWorkout: [
            { text: "Elbow lever attempts with straight legs (for time)", rest: "90s" },
            { text: "Tuck elbow lever holds (5s x 3 sets)", rest: "90s" },
            { text: "Straight arm plank (70s x 3 sets)", rest: "30s" }
        ]},
        { day: 20, dailyWorkout: [
            { text: "Crow stand (Frog stand) (45s x 3 sets)", rest: "60s" },
            { text: "Tuck planche lean (20s x 3 sets)", rest: "60s" },
            { text: "Elbow lever attempts with straight legs (for time)", rest: "90s" }
        ]},
        { day: 21, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light foam rolling and stretching", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 22, dailyWorkout: [
            { text: "Tuck planche lean (20s x 3 sets)", rest: "60s" },
            { text: "Tuck elbow lever holds (8s x 3 sets)", rest: "90s" },
            { text: "Crow stand (Frog stand) (50s x 3 sets)", rest: "60s" }
        ]},
        { day: 23, dailyWorkout: [
            { text: "Elbow lever attempts with straight legs (for time)", rest: "90s" },
            { text: "Tuck elbow lever holds (10s x 3 sets)", rest: "90s" },
            { text: "Tuck planche lean (25s x 3 sets)", rest: "60s" }
        ]},
        { day: 24, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: gentle stretching for entire body", rest: "N/A" },
            { text: "Light walk or swim", rest: "N/A" }
        ]},
        { day: 25, dailyWorkout: [
            { text: "Tuck elbow lever holds (10s x 3 sets)", rest: "90s" },
            { text: "Crow stand (Frog stand) (60s x 3 sets)", rest: "60s" },
            { text: "Elbow lever attempts with straight legs (for time)", rest: "90s" }
        ]},
        { day: 26, dailyWorkout: [
            { text: "Crow stand (Frog stand) (60s x 3 sets)", rest: "60s" },
            { text: "Tuck elbow lever holds (15s x 3 sets)", rest: "90s" },
            { text: "Full elbow lever attempts (for time)", rest: "120s" }
        ]},
        { day: 27, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light mobility for wrists and shoulders", rest: "N/A" },
            { text: "Static stretches", rest: "N/A" }
        ]},
        { day: 28, dailyWorkout: [
            { text: "Tuck elbow lever holds (15s x 3 sets)", rest: "90s" },
            { text: "Full elbow lever attempts (for time)", rest: "120s" },
            { text: "Straight arm plank (90s x 3 sets)", rest: "30s" }
        ]},
        { day: 29, dailyWorkout: [
            { text: "Rest" },
            { text: "Complete rest day before test", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 30, dailyWorkout: [
            { text: "Test: Attempt a full elbow lever for as long as possible" },
            { text: "Secondary test: Max hold of Crow stand" },
            { text: "Tertiary test: Max hold of Tuck elbow lever" }
        ]}
    ]
},
    {
    name: "90 Degree Hold",
    tasks: [
        { day: 1, dailyWorkout: [
            { text: "Push-up holds (bottom position) (10s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (5 reps x 3 sets)", rest: "90s" },
            { text: "Dips (bottom hold) (10s x 3 sets)", rest: "60s" }
        ]},
        { day: 2, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light stretching for chest and triceps", rest: "N/A" },
            { text: "Wrist mobility drills", rest: "N/A" }
        ]},
        { day: 3, dailyWorkout: [
            { text: "Pseudo planche push-ups (5 reps x 3 sets)", rest: "90s" },
            { text: "Push-up holds (bottom position) (15s x 3 sets)", rest: "60s" },
            { text: "Dips (bottom hold) (12s x 3 sets)", rest: "60s" }
        ]},
        { day: 4, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Foam rolling for chest and shoulders", rest: "N/A" }
        ]},
        { day: 5, dailyWorkout: [
            { text: "Dips (bottom hold) (10s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (8 reps x 3 sets)", rest: "90s" },
            { text: "Push-up holds (bottom position) (20s x 3 sets)", rest: "60s" }
        ]},
        { day: 6, dailyWorkout: [
            { text: "Push-up holds (bottom position) (15s x 3 sets)", rest: "60s" },
            { text: "Dips (bottom hold) (15s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (10 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 7, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: full-body stretching", rest: "N/A" },
            { text: "Gentle walk or swim", rest: "N/A" }
        ]},
        { day: 8, dailyWorkout: [
            { text: "Pseudo planche push-ups (8 reps x 3 sets)", rest: "90s" },
            { text: "Push-up holds (bottom position) (20s x 3 sets)", rest: "60s" },
            { text: "Dips (bottom hold) (18s x 3 sets)", rest: "60s" }
        ]},
        { day: 9, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: wrist and elbow mobility", rest: "N/A" },
            { text: "Light massage or stretching", rest: "N/A" }
        ]},
        { day: 10, dailyWorkout: [
            { text: "Dips (bottom hold) (15s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (10 reps x 3 sets)", rest: "90s" },
            { text: "Push-up holds (bottom position) (25s x 3 sets)", rest: "60s" }
        ]},
        { day: 11, dailyWorkout: [
            { text: "Push-up holds (bottom position) (20s x 3 sets)", rest: "60s" },
            { text: "Dips (bottom hold) (20s x 3 sets)", rest: "60s" },
            { text: "90-degree push-up attempts (negatives) (2 reps x 3 sets)", rest: "120s" }
        ]},
        { day: 12, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Wrist warm-up and stretches", rest: "N/A" }
        ]},
        { day: 13, dailyWorkout: [
            { text: "Pseudo planche push-ups (10 reps x 3 sets)", rest: "90s" },
            { text: "Push-up holds (bottom position) (25s x 3 sets)", rest: "60s" },
            { text: "Dips (bottom hold) (22s x 3 sets)", rest: "60s" }
        ]},
        { day: 14, dailyWorkout: [
            { text: "Dips (bottom hold) (20s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (12 reps x 3 sets)", rest: "90s" },
            { text: "90-degree push-up attempts (negatives) (3 reps x 3 sets)", rest: "120s" }
        ]},
        { day: 15, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: foam rolling for chest and triceps", rest: "N/A" },
            { text: "Gentle yoga session focusing on upper body strength", rest: "N/A" }
        ]},
        { day: 16, dailyWorkout: [
            { text: "Push-up holds (bottom position) (25s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (12 reps x 3 sets)", rest: "90s" },
            { text: "Dips (bottom hold) (25s x 3 sets)", rest: "60s" }
        ]},
        { day: 17, dailyWorkout: [
            { text: "Pseudo planche push-ups (12 reps x 3 sets)", rest: "90s" },
            { text: "90-degree push-up attempts (negatives) (5 reps x 3 sets)", rest: "120s" },
            { text: "Push-up holds (bottom position) (30s x 3 sets)", rest: "60s" }
        ]},
        { day: 18, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Static stretches for chest and shoulders", rest: "N/A" }
        ]},
        { day: 19, dailyWorkout: [
            { text: "Dips (bottom hold) (25s x 3 sets)", rest: "60s" },
            { text: "90-degree push-up attempts (negatives) (6 reps x 3 sets)", rest: "120s" },
            { text: "Pseudo planche push-ups (15 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 20, dailyWorkout: [
            { text: "Push-up holds (bottom position) (30s x 3 sets)", rest: "60s" },
            { text: "Dips (bottom hold) (30s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (18 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 21, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light foam rolling and stretching", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 22, dailyWorkout: [
            { text: "Pseudo planche push-ups (15 reps x 3 sets)", rest: "90s" },
            { text: "90-degree push-up attempts (negatives) (8 reps x 3 sets)", rest: "120s" },
            { text: "Dips (bottom hold) (35s x 3 sets)", rest: "60s" }
        ]},
        { day: 23, dailyWorkout: [
            { text: "Dips (bottom hold) (30s x 3 sets)", rest: "60s" },
            { text: "90-degree push-up attempts (for reps)", rest: "120s" },
            { text: "Push-up holds (bottom position) (35s x 3 sets)", rest: "60s" }
        ]},
        { day: 24, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: gentle stretching for entire body", rest: "N/A" },
            { text: "Light walk or swim", rest: "N/A" }
        ]},
        { day: 25, dailyWorkout: [
            { text: "90-degree push-up attempts (for reps)", rest: "120s" },
            { text: "Pseudo planche push-ups (18 reps x 3 sets)", rest: "90s" },
            { text: "Dips (bottom hold) (40s x 3 sets)", rest: "60s" }
        ]},
        { day: 26, dailyWorkout: [
            { text: "Pseudo planche push-ups (18 reps x 3 sets)", rest: "90s" },
            { text: "90-degree push-up attempts (for reps)", rest: "120s" },
            { text: "Push-up holds (bottom position) (40s x 3 sets)", rest: "60s" }
        ]},
        { day: 27, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light mobility for shoulders and elbows", rest: "N/A" },
            { text: "Static stretches", rest: "N/A" }
        ]},
        { day: 28, dailyWorkout: [
            { text: "90-degree push-up attempts (for reps)", rest: "120s" },
            { text: "Dips (bottom hold) (45s x 3 sets)", rest: "60s" },
            { text: "Pseudo planche push-ups (20 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 29, dailyWorkout: [
            { text: "Rest" },
            { text: "Complete rest day before test", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 30, dailyWorkout: [
            { text: "Test: Attempt a 90-degree hold for as long as possible" },
            { text: "Secondary test: Max reps of Pseudo planche push-ups" },
            { text: "Tertiary test: Max hold of Dips (bottom hold)" }
        ]}
    ]
},
    {
    name: "V-sit",
    tasks: [
        { day: 1, dailyWorkout: [
            { text: "L-sit holds (15s x 3 sets)", rest: "60s" },
            { text: "Pike compressions (10 reps x 3 sets)", rest: "60s" },
            { text: "Leg raises (floor) (12 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 2, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light stretching for hamstrings and core", rest: "N/A" },
            { text: "Foam rolling for core and hip flexors", rest: "N/A" }
        ]},
        { day: 3, dailyWorkout: [
            { text: "Pike compressions (10 reps x 3 sets)", rest: "60s" },
            { text: "L-sit holds (20s x 3 sets)", rest: "60s" },
            { text: "Leg raises (floor or hanging) (15 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 4, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Wrist warm-up and stretches", rest: "N/A" }
        ]},
        { day: 5, dailyWorkout: [
            { text: "Leg raises (floor or hanging) (12 reps x 3 sets)", rest: "60s" },
            { text: "Pike compressions (15 reps x 3 sets)", rest: "60s" },
            { text: "Tuck V-sit attempts (for time)", rest: "90s" }
        ]},
        { day: 6, dailyWorkout: [
            { text: "L-sit holds (20s x 3 sets)", rest: "60s" },
            { text: "Tuck V-sit attempts (for time)", rest: "90s" },
            { text: "Leg raises (hanging) (12 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 7, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: full-body stretching", rest: "N/A" },
            { text: "Gentle walk or swim", rest: "N/A" }
        ]},
        { day: 8, dailyWorkout: [
            { text: "Pike compressions (15 reps x 3 sets)", rest: "60s" },
            { text: "L-sit holds (25s x 3 sets)", rest: "60s" },
            { text: "Tuck V-sit attempts (for time)", rest: "90s" }
        ]},
        { day: 9, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: core mobility drills", rest: "N/A" },
            { text: "Light massage or stretching", rest: "N/A" }
        ]},
        { day: 10, dailyWorkout: [
            { text: "Leg raises (floor or hanging) (15 reps x 3 sets)", rest: "60s" },
            { text: "Pike compressions (18 reps x 3 sets)", rest: "60s" },
            { text: "L-sit holds (30s x 3 sets)", rest: "60s" }
        ]},
        { day: 11, dailyWorkout: [
            { text: "L-sit holds (25s x 3 sets)", rest: "60s" },
            { text: "Tuck V-sit attempts (for time)", rest: "90s" },
            { text: "Leg raises (hanging) (15 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 12, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Static stretches for hamstrings and hips", rest: "N/A" }
        ]},
        { day: 13, dailyWorkout: [
            { text: "Tuck V-sit attempts (for time)", rest: "90s" },
            { text: "Pike compressions (20 reps x 3 sets)", rest: "60s" },
            { text: "L-sit holds (30s x 3 sets)", rest: "60s" }
        ]},
        { day: 14, dailyWorkout: [
            { text: "Leg raises (floor or hanging) (15 reps x 3 sets)", rest: "60s" },
            { text: "Tuck V-sit holds (3s x 3 sets)", rest: "90s" },
            { text: "L-sit to tuck V-sit transition attempts (3 reps x 3 sets)", rest: "90s" }
        ]},
        { day: 15, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: foam rolling for hips and lower back", rest: "N/A" },
            { text: "Gentle yoga session", rest: "N/A" }
        ]},
        { day: 16, dailyWorkout: [
            { text: "L-sit holds (30s x 3 sets)", rest: "60s" },
            { text: "Tuck V-sit holds (5s x 3 sets)", rest: "90s" },
            { text: "Pike compressions (20 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 17, dailyWorkout: [
            { text: "Tuck V-sit attempts (for time)", rest: "90s" },
            { text: "Leg raises (hanging) (20 reps x 3 sets)", rest: "60s" },
            { text: "L-sit to V-sit transition attempts (3 reps x 3 sets)", rest: "120s" }
        ]},
        { day: 18, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light cardio", rest: "N/A" },
            { text: "Static stretches for hamstrings and core", rest: "N/A" }
        ]},
        { day: 19, dailyWorkout: [
            { text: "Pike compressions (20 reps x 3 sets)", rest: "60s" },
            { text: "Tuck V-sit holds (8s x 3 sets)", rest: "90s" },
            { text: "Leg raises (floor or hanging) (25 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 20, dailyWorkout: [
            { text: "Leg raises (floor or hanging) (25 reps x 3 sets)", rest: "60s" },
            { text: "Tuck V-sit holds (10s x 3 sets)", rest: "90s" },
            { text: "V-sit attempts (for time)", rest: "120s" }
        ]},
        { day: 21, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light foam rolling and stretching", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 22, dailyWorkout: [
            { text: "Tuck V-sit holds (5s x 3 sets)", rest: "90s" },
            { text: "Pike compressions (25 reps x 3 sets)", rest: "60s" },
            { text: "Leg raises (hanging) (25 reps x 3 sets)", rest: "60s" }
        ]},
        { day: 23, dailyWorkout: [
            { text: "Pike compressions (25 reps x 3 sets)", rest: "60s" },
            { text: "V-sit attempts (for time)", rest: "120s" },
            { text: "Tuck V-sit holds (12s x 3 sets)", rest: "90s" }
        ]},
        { day: 24, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: gentle stretching for entire body", rest: "N/A" },
            { text: "Light walk or swim", rest: "N/A" }
        ]},
        { day: 25, dailyWorkout: [
            { text: "Tuck V-sit holds (8s x 3 sets)", rest: "90s" },
            { text: "Leg raises (floor or hanging) (30 reps x 3 sets)", rest: "60s" },
            { text: "V-sit attempts (for time)", rest: "120s" }
        ]},
        { day: 26, dailyWorkout: [
            { text: "Leg raises (floor or hanging) (30 reps x 3 sets)", rest: "60s" },
            { text: "V-sit attempts (for time)", rest: "120s" },
            { text: "Tuck V-sit holds (15s x 3 sets)", rest: "90s" }
        ]},
        { day: 27, dailyWorkout: [
            { text: "Rest" },
            { text: "Active recovery: light mobility for hips and core", rest: "N/A" },
            { text: "Static stretches", rest: "N/A" }
        ]},
        { day: 28, dailyWorkout: [
            { text: "V-sit attempts (for time)", rest: "120s" },
            { text: "Pike compressions (30 reps x 3 sets)", rest: "60s" },
            { text: "L-sit to V-sit transition attempts (5 reps x 3 sets)", rest: "120s" }
        ]},
        { day: 29, dailyWorkout: [
            { text: "Rest" },
            { text: "Complete rest day before test", rest: "N/A" },
            { text: "Mental preparation and visualization", rest: "N/A" }
        ]},
        { day: 30, dailyWorkout: [
            { text: "Test: Attempt a V-sit hold for as long as possible" },
            { text: "Secondary test: Max reps of Hanging leg raises" },
            { text: "Tertiary test: Max hold of L-sit" }
        ]}
    ]
}
];

const subContainer = document.querySelector('.sub_container');
const nxtContainer = document.querySelector('.nxt_container');
const skillListContainer = document.querySelector('.skillList');
const skillGrid = nxtContainer.querySelector('.grid');

/**
 * Toggles the visibility between the start screen and the skill selection screen.
 * This function also populates the skill cards if they haven't been created yet.
 */
function startbtn() {
    subContainer.classList.add('hidden');
    nxtContainer.classList.remove('hidden');
    
    // Only populate skill cards once on the first run
    if (skillGrid.innerHTML.trim() == '') {
        populateSkillCards();
    }
}

/**
 * Populates the skill selection grid with cards based on skillsData.
 * This function is called only once for efficiency.
 */
function populateSkillCards() {
    skillGrid.innerHTML = skillsData.map(skill => `
        <div class="skill-card">
            <h3>${skill.name}</h3>
            <button class="view-btn" data-skill="${skill.name}">
                View Plan
            </button>
        </div>
    `).join('');

    // Event delegation for view buttons, called only once
    skillGrid.addEventListener('click', function(event) {
        const button = event.target.closest('.view-btn');
        if (button) {
            displaySkillPlan(button.dataset.skill);
        }
    });
}

/**
 * Displays the 30-day plan for a selected skill.
 * This function generates unique keys for localStorage to prevent conflicts.
 * It also loads the saved progress for the current plan.
 */
function displaySkillPlan(skillName) {
    const skillObj = skillsData.find(skill => skill.name === skillName);
    if (!skillObj) {
        skillListContainer.innerHTML = `<h2>Error: Plan not found.</h2>`;
        nxtContainer.classList.add('hidden');
        skillListContainer.classList.remove('hidden');
        return;
    }

    // Generate a unique and safe ID for the skill plan
    const skillId = skillName.replace(/\s/g, '_').toLowerCase();

    const planHtml = `
        <h2>30-Day ${skillObj.name} Challenge</h2>
        <div class="skill-tasks" data-skill-id="${skillId}">
            ${skillObj.tasks.map((task,i) => `
                <div class="skill-task-item">
                    <label>
                        <input type="radio" data-day="${task.day}" data-skill-id="${skillId}" class="radio-input">
                        <span class="day-number" onclick="workout('dayplane',${i})">Day ${task.day}:</span>
                        <ul style = 'display:none;' class = "dayplane${i}">
                            ${task.dailyWorkout.map(exercise => `
                                <li>
                                    <span class="task-text">${exercise.text}</span>
                                    ${exercise.rest ? `<span class="rest-time">Rest: ${exercise.rest}</span>` : ''}
                                </li>
                            `).join('')}
                        </ul>
                    </label>
                </div>
            `).join('')}
        </div>
    `;
    skillListContainer.innerHTML = `<button onclick="backToSkills()" class="back-button">&larr; Back</button>` + planHtml;

    nxtContainer.classList.add('hidden');
    skillListContainer.classList.remove('hidden');

    // Load progress for the selected skill
    loadProgress(skillId);
}

/**
 * Loads the saved progress for a specific skill plan from localStorage.
 */
function loadProgress(skillId) {
    document.querySelectorAll(`.skill-tasks[data-skill-id="${skillId}"] .radio-input`).forEach(radio => {
        const key = `${skillId}-day-${radio.dataset.day}`;
        if (localStorage.getItem(key) === "true") {
            radio.checked = true;
        } else {
            radio.checked = false;
        }
    });
}

/**
 * Handles saving progress to localStorage using event delegation.
 * Listens for changes on the skill list container.
 */
skillListContainer.addEventListener('change', function(event) {
    const radio = event.target.closest('.radio-input');
    if (radio) {
        const skillId = radio.dataset.skillId;
        const day = radio.dataset.day;
        const key = `${skillId}-day-${day}`;
        localStorage.setItem(key, radio.checked);
    }
});

/**
 * Resets all progress by clearing localStorage and reloading the page.
 * This ensures the UI is completely in sync with the cleared data.
 */
function resetProgress() {
    localStorage.clear();
    alert('All progress has been reset!');
    location.reload();
}

/**
 * Navigates back to the skill selection page.
 */
function backToSkills() {
    skillListContainer.classList.add('hidden');
    nxtContainer.classList.remove('hidden');
}

/**
 * Navigates back to the main start page.
 */
function backToStart() {
    nxtContainer.classList.add('hidden');
    subContainer.classList.remove('hidden');
}

function workout(e,i){
    
    document.querySelector(`.${e+i}`).style.display='block'
    
}

// Expose functions to the global scope so they can be called by inline `onclick` attributes
window.startbtn = startbtn;
window.backToSkills = backToSkills;
window.backToStart = backToStart;
window.resetProgress = resetProgress;